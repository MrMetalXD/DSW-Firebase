const  db  = require("../firebaseConfig");
const {collection, addDoc, getDocs} = require("firebase/firestore");

async function getAllProjects(){
  const projectsCollection = collection(db, "projects");
  const projectSnapshot = await getDocs(projectsCollection);
  const projectList = projectSnapshot.docs.map(doc => 
    ({id: doc.id, 
      ...doc.data()}));
  return projectList;
}


async function createProject(data) {
    const newProject = {
      name: data.name,
      description: data.description,
      startDate: data.startDate,
      endDate: data.endDate,
      status: data.status,
      budget: data.budget
    };
    const docRef = await addDoc(collection(db, "projects"), newProject);
    return { id: docRef.id, ...newProject };
}

module.exports = {
  getAllProjects,
  createProject
}