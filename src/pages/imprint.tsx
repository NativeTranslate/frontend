import { impressumData } from '@/lib/data/constants';

const Impressum = () => {
    const { details, contact, otherInfo } = impressumData;

    return (
        <div className="min-h-screen bg-dark-200 flex items-center justify-center">
            <div className="container max-w-3xl mx-auto h-full p-8 bg-dark-300 text-white-900 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-primary-500 mb-8 text-center">
                    Imprint
                </h1>

                <div className={'space-y-8'}>
                    <div>
                        <h2 className="text-2xl font-semibold text-light-900">
                            Details
                        </h2>
                        <div className="mt-4 space-y-2">
                            <p>{details.name}</p>
                            <p>{details.street}</p>
                            <p>{details.building}</p>
                            <p>{details.city}</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-light-900">
                            Contact
                        </h2>
                        <div className="mt-4 space-y-2">
                            <p>
                                Telefon:{' '}
                                <span className="text-main-one">
                                    {contact.phone}
                                </span>
                            </p>
                            <p>
                                E-Mail:{' '}
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="text-main-one hover:underline"
                                >
                                    {contact.email}
                                </a>
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-light-900">
                            Other Informations
                        </h2>
                        <div className="mt-4 space-y-2">
                            <p className="text-red-500">{otherInfo.note}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Impressum;
