import React from 'react'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import Schemedata from './Scheme';

const Schemes1 = () => {

     /* now we need a product id which is pass from the product page */
     const proid = useParams();
     const proDetail = Schemedata.filter(x => x.id == proid.id);
     const promain = proDetail[0];
     console.log(promain);

    return (
        <div>
            <div className="container">
                <div className="career_div container  bg-white shadow p-3 mt-5 rounded-3">

                    <div className="row">
                        <p>Ministry of finance & industry</p>
                        <NavLink to="/" className="text-decoration-none fs-4">Pradhan mantri yojana</NavLink>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate placeat magni aut, veniam libero dolorem sit vero cum labore iste!</p>
                    </div>
                    <div className="row">
                        <div className="col"><NavLink to="/" className="btn btn-light text-decoration-none">Pradhan mantri yojana</NavLink></div>
                        <NavLink to="/scheme1" className="col">   <i className="fa-solid fa-arrow-right  fs-3 float-end"> </i></NavLink>
                    </div>

                </div>
                <h4 className="p-2 text-info mt-4"> Details</h4>
                <div className="container shadow-sm p-5 rounded-5">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quod blanditiis quidem non voluptate ab deleniti quaerat dolores iste eaque exercitationem tenetur quisquam, doloribus ut sed modi placeat sequi eius quibusdam natus, inventore totam. A error voluptas voluptatibus et nesciunt, quis iusto molestiae cupiditate distinctio expedita, necessitatibus, alias sunt veritatis.</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci!</li>

                    </ul>
                </div>

                <h4 className="p-2 text-info mt-4"> Benefits</h4>
                <div className="container shadow-sm p-5 rounded-5">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quod blanditiis quidem non voluptate ab deleniti quaerat dolores iste eaque exercitationem tenetur quisquam, doloribus ut sed modi placeat sequi eius quibusdam natus, inventore totam. A error voluptas voluptatibus et nesciunt, quis iusto molestiae cupiditate distinctio expedita, necessitatibus, alias sunt veritatis.</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci!</li>

                    </ul>
                </div>

                <h4 className="p-2 text-info mt-4"> Eligibility</h4>
                <div className="container shadow-sm p-5 rounded-5">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quod blanditiis quidem non voluptate ab deleniti quaerat dolores iste eaque exercitationem tenetur quisquam, doloribus ut sed modi placeat sequi eius quibusdam natus, inventore totam. A error voluptas voluptatibus et nesciunt, quis iusto molestiae cupiditate distinctio expedita, necessitatibus, alias sunt veritatis.</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci!</li>
                    </ul>
                </div>

                <h4 className='mt-4 text-info'>Frequently Asked Questions</h4>
                <div className="accordion mt-4" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Frequently Asked Questions
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schemes1