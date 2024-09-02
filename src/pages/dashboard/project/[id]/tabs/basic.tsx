import ProjectForm from '@/components/form/project-form.tsx';

const Basic = () => {
    return (
        <div>
            <ProjectForm
                initialValues={{
                    identifier: 'test_project',
                    targetLanguages: ['English', 'German', 'Spanish'],
                    visibility: 'public',
                    name: 'Test Project',
                    description: 'This is a beautiful test project!',
                    sourceLanguage: 'English',
                }}
                submitButtonText={'Save changes'}
                onSubmit={async values => {
                    console.log('Submitted:', values);
                }}
            />
        </div>
    );
};
export default Basic;
