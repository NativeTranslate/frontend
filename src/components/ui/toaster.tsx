import {
    Toast,
    ToastClose,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport,
} from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';

export function Toaster() {
    const { toasts } = useToast();

    return (
        <ToastProvider>
            {toasts.map(function ({
                id,
                title,
                description,
                action,
                ...props
            }) {
                return (
                    <Toast
                        className={
                            'bg-dark-300 border-transparent text-white-900 shadow-lg'
                        }
                        key={id}
                        {...props}
                    >
                        <div className="grid gap-1">
                            {title && (
                                <ToastTitle className={'text-primary-500'}>
                                    {title}
                                </ToastTitle>
                            )}
                            {description && (
                                <ToastDescription>
                                    {description}
                                </ToastDescription>
                            )}
                        </div>
                        {action}
                        <ToastClose
                            className={'text-white-900 hover:text-white-900/90'}
                        />
                    </Toast>
                );
            })}
            <ToastViewport />
        </ToastProvider>
    );
}
