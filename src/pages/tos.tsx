import { termsOfServiceData } from '@/lib/data/constants.ts';

const TermsOfService = () => {
    const {
        introduction,
        userResponsibilities,
        limitations,
        illegalContent,
        legalActions,
        modifications,
    } = termsOfServiceData;

    return (
        <div className="min-h-screen bg-dark-200 flex items-center justify-center">
            <div className="container max-w-3xl mx-auto h-full p-8 bg-dark-300 text-white-900 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-primary-500 mb-8 text-center">
                    Terms of Service
                </h1>

                <div className={'space-y-8'}>
                    <div>
                        <h2 className="text-2xl font-semibold text-light-900">
                            Introduction
                        </h2>
                        <div className="mt-4 space-y-2">
                            <p>{introduction}</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-light-900">
                            User Responsibilities
                        </h2>
                        <div className="mt-4 space-y-2">
                            <p>{userResponsibilities}</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-light-900">
                            Limitation of Liability
                        </h2>
                        <div className="mt-4 space-y-2">
                            <p>{limitations}</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-light-900">
                            Illegal Content
                        </h2>
                        <div className="mt-4 space-y-2">
                            <p>{illegalContent}</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-light-900">
                            Legal Actions
                        </h2>
                        <div className="mt-4 space-y-2">
                            <p>{legalActions}</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-light-900">
                            Modifications to Terms
                        </h2>
                        <div className="mt-4 space-y-2">
                            <p>{modifications}</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-light-900">
                            General Provisions
                        </h2>
                        <div className="mt-4 space-y-2">
                            <p>
                                These terms constitute the entire agreement
                                between you and us regarding the use of our
                                service. If any provision of these terms is
                                found to be invalid or unenforceable, the
                                remaining provisions will remain in full force
                                and effect.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
