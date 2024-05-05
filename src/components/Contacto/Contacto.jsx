import { useForm } from "react-hook-form";

const Contacto = () => {
  const { register, handleSubmit} = useForm();

  const enviar = (data) => {
    console.log(data);
  }

  return (

    <div className="container mt-3">
      <h2 className="d-flex justify-content-center ">Contactanos</h2>
      <form className="container mt-3" onSubmit={handleSubmit(enviar)}>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" placeholder="Nombre" {...register("nombre")} />
          </div>
          <div className="col">
            <input type="text"className="form-control" placeholder="Apellido" {...register("apellido")}/>
          </div>
        </div>
        <div className="form-group row mt-3">
          <div className="col">
            <input type="email" className="form-control" id="colFormLabel" placeholder="Ingrese su email" {...register("email")}/>
          </div>
          <div className="col">
            <input type="number" className="form-control" placeholder="Ingrese su telefono" {...register("telefono")}/>
          </div>
        </div>
        <button className="btn btn-primary d-flex justify-content-center" type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
