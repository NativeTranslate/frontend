/**
 * © 2024 Florian O. (https://github.com/Fedox-die-Ente)
 * Created on: 9/4/2024 11:58 PM
 *
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

interface InputLabelProps {
    text: string;
    htmlFor?: string;
    required?: boolean;
}

const InputLabel = ({ text, htmlFor, required }: InputLabelProps) => {
    return (
        <label htmlFor={htmlFor} className="text-sm font-medium text-gray-400">
            {text}
            {required && <span className="text-primary-500 ml-1">*</span>}
        </label>
    );
};
export default InputLabel;
