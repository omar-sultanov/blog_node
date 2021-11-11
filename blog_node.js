const blogItems=process.argv.slice(2);
const showItems=()=>{
    blogItems.map((item)=>{
        console.log(item);
    })
}

const addItem=(newItem)=>{
    const promise= new Promise((resolve,reject)=>{
        blogItems.push(newItem);
        resolve(blogItems)       
        reject("ERROR") 
    })
    return promise;
}

async function getItems(){
    await addItem("Node JS");
    return showItems();
}
getItems()