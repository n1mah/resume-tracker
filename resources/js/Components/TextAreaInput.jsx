import { forwardRef, useRef } from 'react';

export default forwardRef(function TextArea({ className = '',children, ...props }, ref) {
    const input = ref ? ref : useRef();

    return (
        <textarea
            {...props}
            className={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                className
            }
            ref={input}>
            {children}
        </textarea>
    );
});
