import { forwardRef, useRef } from 'react';

export default forwardRef(function SelectInput({ className = '',children, ...props }, ref) {
    const input = ref ? ref : useRef();

    return (
            <select multiple id="countries_multiple"
                    {...props}
                    ref={input}
                    className={'w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm '+
                        className
            }>
                {children}
            </select>
    );
});
