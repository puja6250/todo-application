import axios from "axios";
//import * as chai from 'chai

import * as chai from 'chai';

const { expect } = chai;


describe("Get Api Request",async()=>{
    it("should be able to get ",async()=>{
        const res= await axios.get('http://localhost:5000/api/getall');
        console.log(res.data);
       

    })
})



describe("POST API Request ", function () {
    it("should be able to post", async function () {
      const res = await axios.post('http://localhost:5000/api/create', {
        "title": "data analyst",
        "description": "based on a project",
        "status": "completed"
      });
  
      console.log(res.data);
  
      
      expect(res.status).to.equal(200); // Check the response status
      expect(res.data).to.be.an('object'); 
      expect(res.data).to.have.property('title', 'data analyst'); 
      expect(res.data).to.have.property('description', 'based on a project'); 
      expect(res.data).to.have.property('status', 'completed'); 
    });
  });
 

  describe("PUT  Api Request", function () {
    it("should be able to update", async function () {
        const id = '669c098343c4ce8c66427c6a';
      const res = await axios.put(`http://localhost:5000/api/update/${id}`, {
  
      "title": "AI-ML",
      "description": "using mathematical modeling",
      "status": "completed",
      });
  
      console.log(res.data);
  
     
      expect(res.status).to.equal(200); 
      expect(res.data).to.be.an('object'); 
      expect(res.data).to.have.property('title', 'data '); 
      expect(res.data).to.have.property('description', 'based on a project');
      expect(res.data).to.have.property('status', 'completed'); 
    });
  });



  
  describe("PATCH API Request", function () {
    it("should be able to update", async function () {
      const id = '669b75633a15e9083689d521'; 
      const res = await axios.patch(`http://localhost:5000/api/update/${id}`, {
        
            
            "title": "frontend project",
          
            "status": "pending",
           
          
      });
  
      console.log(res.data);
  
      
      expect(res.status).to.equal(200); 
      expect(res.data).to.be.an('object');
      expect(res.data).to.have.property('title', 'frontend project'); 
   
      expect(res.data).to.have.property('status', 'pending');
    });
  });






  describe("DELETE API Request", function () {
    it("should be able to delete a data", async function () {
      const id = '669d26d54df7e3799cbb569c'; 
      const res = await axios.delete(`http://localhost:5000/api/delete/${id}`);
  
      console.log(res.data);
  
      expect(res.status).to.equal(200); 
     
      
    });
  });