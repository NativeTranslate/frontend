import { ImpressumData, TermsOfServiceData } from '../types';

export const impressumData: ImpressumData = {
    details: {
        name: 'Max Mustermann',
        street: 'Musterstraße 111',
        building: 'Gebäude 44',
        city: '90210 Musterstadt'
    },
    contact: {
        phone: '+49 (0) 123 44 66 66',
        email: 'mustermann@musterfirma.de'
    },
    otherInfo: {
        note: 'The telephone number is NOT intended for support.'
    }
};

export const termsOfServiceData: TermsOfServiceData = {
    introduction:
        'Welcome to our Terms of Service. By using our service, you agree to the following terms. Please read them carefully.',
    userResponsibilities:
        'As a user, you are responsible for the content you submit and for ensuring that it does not contain any illegal material. You must not use our service to distribute illegal content or conduct illegal activities.',
    limitations:
        'We are not liable for any damages that may arise from the use of our service or from the content provided by users. This includes, but is not limited to, any loss of data, business interruption, or other damages resulting from the use or inability to use our service.',
    illegalContent:
        'You are prohibited from using our service to upload or distribute any illegal content. This includes, but is not limited to, content that is offensive, defamatory, or violates any laws.',
    legalActions:
        'We take legal actions against any criminal activities or violations of these terms. Any illegal conduct will be reported to the appropriate authorities and may result in legal action against the responsible parties.',
    modifications:
        'We reserve the right to modify these terms at any time. Changes will be posted on our website, and it is your responsibility to review these terms periodically. Continued use of our service constitutes acceptance of any changes made.'
};
