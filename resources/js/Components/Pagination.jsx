import {  Link } from '@inertiajs/react';
export default function Pagination({links}) {
    if (links)
    return (
        <div>
            <ul className="pagination flex gap-x-2 justify-center">
                {links.map((link,key) => (
                    <li key={key} className="page-item">
                        <Link
                            className={ (link.active ? 'inline-flex bg-gray-300 px-3 py-1.5':' inline-flex px-3 py-1.5 ') + (!link.url?'opacity-25':'') }
                            href={link.url || ''} dangerouslySetInnerHTML={{__html:link.label}}></Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
