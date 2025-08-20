import vehicleService from '../services/vehicleService.js'

class vehicleController{
    construct(){}

    async create(req,res){
        try{
            const data = await vehicleService.create(req.body);
            res.status(200).json({data});
        }catch(e){
            res.status(500).send(e);
        }
    }

        async getAll(req,res){
        try{
            const data = await vehicleService.getAll();
            res.status(200).json({data});
        }catch(e){
            res.status(500).send(e);
        }
    }

 async getById(req, res) {
         try {
             const { id } = req.params;
             const data = await vehicleService.getById(id);
             res.status(200).json({ data });
         } catch (e) {
             res.status(500).send(e);
         }
     }
 
     async update(req, res) {
         try {
             const { id } = req.params;
             const data = await vehicleService.update(id, req.body);
             res.status(200).json({ data });
         } catch (e) {
             res.status(500).send(e);
         }
     }
 
    async delete(req, res) {
        try {
            const { id } = req.params;
            const deletedVehicle = await vehicleService.delete(id);

            if (!deletedVehicle) {
                return res.status(404).json({ message: "Veiculo no encontrado" });
            }

            return res.status(200).json({ message: "Registro eliminado correctamente" });

        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    }
 
}
export default new vehicleController();