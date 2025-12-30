function StudentList(props) {

    var arr = [
        {
            name1: "kamlesh",
            age: 15,
            course: "web dev",
            city: "kalol"
        },
        {
            name1: "ankit",
            age: 15,
            course: "web dev",
            city: "kalol"
        },
        {
            name1: "kamlesh",
            age: 15,
            course: "web dev",
            city: "kalol"
        }

    ]
    return (

        arr.map((e) => {
            return (


                <div className="card">
                    <div className="name">
                        {e.name1}
                    </div>
                    <div className="name">
                        {e.age}
                    </div>
                    <div className="name">
                        {e.course}
                    </div>
                    <div className="name">
                        {e.city}
                    </div>
                </div>



            )
        })

        
    )
}

export default StudentList;

