function RegisterParking() {
  return (
    <div className="container rounded shadow">
      <div className="d-lg-block">
        <div className="card bg-white text-dark">
          <h2 className="card-header border-dark text-black font-weight-bold">
            Registrar parqueadero
          </h2>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-4">
                    <label>Nombre</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group mb-4">
                    <label>Dirección</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group mb-4">
                    <label>Espacios del parqueadero</label>
                    <input type="number" className="form-control" />
                  </div>
                  <div className="form-group mb-4">
                    <label>Tarifa para vehículos Sedan</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-4">
                    <label>Tarifa para vehículos SUV</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group mb-4">
                    <label>Tarifa para motocicletas</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group mb-4">
                    <label>Hora de apertura</label>
                    <input type="time" className="form-control" />
                  </div>
                  <div className="form-group mb-4">
                    <label>Hora de cierre</label>
                    <input type="time" className="form-control" />
                  </div>
                  <div className="form-group mb-4">
                    <label>Cargar imagen del parqueadero</label>
                    <input type="file" className="form-control-file" />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="font-weight-bold btn-lg btn w-100 btn-primary"
              >
                Registrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterParking;
