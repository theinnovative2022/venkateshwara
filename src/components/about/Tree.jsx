import React from 'react'

export default function Tree() {
  return (
    <>
      {/* <ul className="tree">
        <li> <span><p>CEO</p></span>
            <ul>
            <li> <span><p>Manager</p><p>(Production)</p></span>
                <ul>
                <li> <span><p>Foreman</p><p>(Fabrication)</p></span>
                    <ul>
                    <li><span><p>Workers</p></span></li>
                    </ul>
                </li>
                <li> <span><p>Foreman</p><p>(Assembly)</p></span>
                    <ul>
                    <li><span><p>Workers</p></span></li>
                    </ul>
                </li>   
                </ul>
            </li>
            <li> <span><p>Manager</p><p>(Marketing)</p></span>
                <ul>
                <li> <span><p>Sales Officer</p><p>(B)</p></span>
                    <ul>
                    <li><span><p>Salespersons</p></span></li>
                    </ul>
                </li>
                <li> <span><p>Sales Officer</p><p>(B)</p></span>
                    <ul>
                    <li><span><p>Salespersons</p></span></li>
                    </ul>
                </li>
                </ul>
            </li>
            </ul>
        </li>
        </ul> */}

<ul className="tree">
        <li> <span>CEO</span>
            <ul>
            <li> <span>Manager (Production)</span>
                <ul>
                <li> <span>Foreman (Fabrication)</span>
                    <ul>
                    <li><span>Workers</span></li>
                    </ul>
                </li>
                <li> <span>Foreman (Assembly)</span>
                    <ul>
                    <li><span>Workers</span></li>
                    </ul>
                </li>   
                </ul>
            </li>
            <li> <span>Manager (Marketing)</span>
                <ul>
                <li> <span>Sales Officer (B)</span>
                    <ul>
                    <li><span>Salespersons</span></li>
                    </ul>
                </li>
                <li> <span>Sales Officer (B)</span>
                    <ul>
                    <li><span>Salespersons</span></li>
                    </ul>
                </li>
                </ul>
            </li>
            </ul>
        </li>
        </ul>
    </>
  )
}