import express, { Request, Response } from 'express';

const server = express();
const port = 3800;
let masterBreeds: any;



server.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
  });


server.get('/breeds/list/all', async (req: Request, res: Response) => {
    
    const {offset, size} =req.query;
    
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    return res.status(response.status).send(await response.json());
  });

  //return only master breeds
server.get('/breeds/list', async (req: Request, res: Response) => {
   
    const offset = parseInt(req.query.offset as string);
    const size = parseInt(req.query.size as string);
    if(!masterBreeds){
        const response = await fetch('https://dog.ceo/api/breeds/list');
        const res = await response.json();
        
        masterBreeds =  res.message;
    }

    let results;

    if(!offset && !size ){
        results= masterBreeds
    
    } else if(offset && !size && offset < masterBreeds.length ){
        results = masterBreeds.slice(offset );
       
    } else if(!offset && size && size < masterBreeds.length){
        results = masterBreeds.slice(0,size);
    
    } else if( offset && size && offset + size <= masterBreeds.length){
        results = masterBreeds.slice(offset,offset+size);
       
    } 
    if(results){
        return res.status(200).json({method: req.method, results});  }
    else{
        res.status(404).json({
            method: req.method,
            message: "requested range exceeds the max number of the data"
          });
    }
    

  });

  
server.get('/breeds/:id/image', async (req: Request, res: Response) => {
  const response = await fetch(`https://dog.ceo/api/breed/${req.params.id}/images/random`);
  return res.status(response.status).send(await response.json());
});


server.get('/breeds/detail/:id', async (req: Request, res: Response) => {
    const response = await fetch(`https://dog.ceo/api/breed/${req.params.id}`);
    return res.status(response.status).send(await response.json());
  });



// start the server
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });