const Comments = ()=>{
    return (
        <div className="w-full flex flex-col gap-4">
            <h2>التعليقات</h2>
            <div className="flex items-center justify-between">
                <input className="w-[90%] rounded-full border-none py-3 px-4" placeholder="سيب تعليق عالاكل"/>
                <button className="border-none bg-inherit cursor-pointer">
                    <i className="fa-solid fa-paper-plane text-2xl text-black"></i>
                </button>
            </div>
            
            <div className="flex flex-col">
                <Comment/>
            </div>

        </div>
    )
}

const Comment = ()=>{
    return (
        <div className="bg-gray py-4 px-8 flex gap-4 rounded-md">
            <section className="h-full"><i className="fa-solid fa-user text-xl"></i></section>
            <section className="flex flex-col gap-2">
                <p>اسمي</p>
                
                <p className="bg-[#111111b4] text-white p-2 rounded-sm">
                    هذا هو مثال لنص يمكن أن يستبدل فى نفس ايا كان يا زمكان اين انا اي كلام و همذا بلا بلا بلا
                </p>

                <p className="text-sm">, 15/3/2022, الخميس</p>
            </section>
        </div>
    )
}

export default Comments