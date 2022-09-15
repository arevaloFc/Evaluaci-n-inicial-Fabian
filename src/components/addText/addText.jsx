/* eslint-disable react/prop-types */

const AddText = () => {

    return (
        <>
            <div>
                <form id="formulario">
                    <div className="mb-3 mx-3">
                        <label htmlFor="anotacion" className="form-label fw-bold" >My TaskList App!!</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="anotacion" 
                        name='anotacion'
                        />
                    </div>
                    <div><button type='submit' className="btn btn-primary mt-3 mb-4">bo</button></div>
                </form>
            </div>
        </>
    )   
}

export default AddText;