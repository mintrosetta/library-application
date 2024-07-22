export default function Heros() {
    return (
        <>  
            <div>
                {/* desktop */}
                <div className="d-none d-lg-block">
                    <div className="row g-0 mt-5">
                        <div className="col-sm-6 col-md-6">
                            <div className="col-image-left">
                        </div>
                        </div>
                        <div className="col-4 col-md-4 container d-flex justify-content-center align-item-center">
                            <div className="ml-2">
                                <h1>What have you been reading ?</h1>
                                <p className="lead">
                                    The library team would love to know what you have been reading.
                                    Whether it is to learn a new skill or grow within one,
                                    we will be albe provice the top content for you!
                                </p>
                                <a className="btn main-color btn-lg text-white" href="#">Sign up</a>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                            <div className="ml-2">
                                <h1>Our collection is always chaining!</h1>
                                <p className="lead">
                                    Thy to check in daily as out collection is always changing!
                                    We work nonstop to provide the most accurate book selection possible
                                    for out luv 2 read student! We are dilligent about our book selection 
                                    and our book are always going to be our priority 
                                </p>
                            </div>  
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <div className="col-image-right">

                            </div>
                        </div>
                    </div>
                </div>

                {/* mobile */}
                <div className="d-lg-none">
                    <div className="container">
                        <div className="m-2">
                            <div className="col-image-left">

                            </div>
                            <div className="mt-2">
                                <h1>What have you been reading ?</h1>
                                <p className="lead">
                                    The library team would love to know what you have been reading.
                                    Whether it is to learn a new skill or grow within one,
                                    we will be albe provice the top content for you!
                                </p>
                                <a className="btn main-color btn-lg text-white" href="#">Sign up</a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="col-image-right">

                            </div>
                            <div className="mt-2">
                                <h1>Our collection is always chaining!</h1>
                                <p className="lead">
                                    Thy to check in daily as out collection is always changing!
                                    We work nonstop to provide the most accurate book selection possible
                                    for out luv 2 read student! We are dilligent about our book selection 
                                    and our book are always going to be our priority 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}