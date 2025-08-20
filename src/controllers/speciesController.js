import speciesService from '../services/SpeciesService.js'

class speciesController{
    construct(){}

    async create(req,res){
        try{
            const data = await speciesService.create(req.body);
            res.status(200).json({data});
        }catch(e){
            res.status(500).send(e);
        }
    }

        async getAll(req,res){
        try{
            const data = await speciesService.getAll();
            res.status(200).json({data});
        }catch(e){
            res.status(500).send(e);
        }
    }

 async getById(req, res) {
         try {
             const { id } = req.params;
             const data = await speciesService.getById(id);
             res.status(200).json({ data });
         } catch (e) {
             res.status(500).send(e);
         }
     }
 
     async update(req, res) {
         try {
             const { id } = req.params;
             const data = await speciesService.update(id, req.body);
             res.status(200).json({ data });
         } catch (e) {
             res.status(500).send(e);
         }
     }
 
     async delete(req, res) {
         try {
             const { id } = req.params;
             const data = await speciesService.delete(id);
             res.status(200).json({ data });
         } catch (e) {
             res.status(500).send(e);
         }
     }
 
}
export default new speciesController();