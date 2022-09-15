/* eslint-disable react/prop-types */

const AddText = () => {

    return (
        <>
            <div className="container">
                <form id="formulario">
                    <div className="col-auto">
                        <label htmlFor="anotacion" className="form-label fw-bold" >My TaskList App!!</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="anotacion" 
                        name='anotacion'
                        />
                    </div>
                    <div><button type='submit'>Add</button></div>
                </form>
            </div>
        </>
    )   
}

export default AddText;