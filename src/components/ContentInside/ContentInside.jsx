import React, { useState } from 'react'
import useCollapse from 'react-collapsed';
import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi'
import "./ContentInside.css";
function ContentInside() {
    const [isExpanded, setExpanded] = useState(true)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
    return (
        <div className='content-inside'>
            <div className='user'>Utilizador</div>
            <div className='content-checkbox'>
                <div className='content-checkbox-title'  {...getToggleProps({
                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}>Tipo de utilizador {isExpanded ? <HiOutlineMinus /> : <HiOutlinePlus />} </div>
                <div {...getCollapseProps()}>
                    <div className='checkbox'>
                        <div className='individual-checkbox'>
                            <input type="checkbox" /><span>Project Manager</span>
                        </div>
                        <div className='individual-checkbox'>
                            <input type="checkbox" /><span> Developer </span>
                        </div>
                        <div className='individual-checkbox'>
                            <input type="checkbox" /><span> Architect </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='content-form'>
                <div className="content-form-title" {...getToggleProps({
                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}> Contacto  {isExpanded ? <HiOutlineMinus /> : <HiOutlinePlus />}</div>
                <div {...getCollapseProps()}>
                    <div className='form'>
                        <div className='individual-form'>
                            Email<input type="email" />
                        </div>
                        <div className='individual-form'>
                            Palavra-passe<input type="password" />
                        </div>
                        <div className='individual-form'>
                            Telefone<input type="tel" placeholder="+351" pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
                                required />
                        </div>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <button className='cancel-button'>Cancelar</button>
                <button className='save-button'>GUARDAR</button>
            </div>
        </div>
    )
}

export default ContentInside