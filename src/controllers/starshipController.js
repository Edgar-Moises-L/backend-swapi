import starshipService from '../services/starshipServices.js'

class starshipController{
    construct(){}

    async create(req,res){
        try{
            const data = await starshipService.create(req.body);
            res.status(200).json({data});
        }catch(e){
            res.status(500).send(e);
        }
    }

        async getAll(req,res){
        try{
            const data = await starshipService.getAll();
            res.status(200).json({data});
        }catch(e){
            res.status(500).send(e);
        }
    }

 async getById(req, res) {
         try {
             const { id } = req.params;
             const data = await starshipService.getById(id);
             res.status(200).json({ data });
         } catch (e) {
             res.status(500).send(e);
         }
     }
 
     async update(req, res) {
         try {
             const { id } = req.params;
             const data = await starshipService.update(id, req.body);
             res.status(200).json({ data });
         } catch (e) {
             res.status(500).send(e);
         }
     }
 
     async delete(req, res) {
         try {
             const { id } = req.params;
             const data = await starshipService.delete(id);
             res.status(200).json({ data });
         } catch (e) {
             res.status(500).send(e);
         }
     }
 
}
export default new starshipController();