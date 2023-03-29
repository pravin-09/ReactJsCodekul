import React,{useMemo} from "react"
function UseMemoDemo(){

    const users=[ {
        id:1,
        name:'Abhi'
    },{
        id:2,
        name:'Rahul'
    }, ]

    const[text,setText]=React.useState('')
    const[search,setSearch]=React.useState('')

    const handleInput=e=>{
        setText(e.target.value)
    }

    const handleSearch=()=>{
        setSearch(text)
    }

    const filteredData=useMemo(()=>users.filter((user)=>{
        return user.name.includes(search)
    }),[search])

    return(
        <div>
            <h1>UseMemo</h1>
            <input type='text' onChange={handleInput}/>
            <button type="button" onClick={handleSearch}>Search</button>
            <DisplayUsers userList={filteredData}/>
        </div>
    )
}

function DisplayUsers({userList}){

    return(
        <ul>
            {
                userList.map((user)=>(
                    <li>{user.name}</li>
                ))
            }
        </ul>
    )
}

export default UseMemoDemo