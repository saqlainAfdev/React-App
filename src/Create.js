const Create = () => {
    return ( 
        <>        
        <div className="container">
            <h1 className="py-5 text-center">Add New Blog</h1>
            <form>
                <div className="ctm-input">
                    <label><span>*</span>Blog Title</label>
                    <input type="text" placeholder="Blog Title" required />
                </div>
                <div className="ctm-input">
                    <label><span>*</span>Blog Body</label>
                    <textarea required placeholder="Text here"></textarea>
                </div>
                <select required >
                    <option value="Fyodor Dostoyevsky">Fyodor Dostoyevsky</option>
                    <option value="Leo Tolstoy">Leo Tolstoy</option>
                    <option value="Joseph Conrad">Joseph Conrad</option>
                    <option value="Ernest Hemingway">Ernest Hemingway</option>
                    <option value="Mohsin Hamid">Mohsin Hamid</option>
                    <option value="Akhil Sharma">Akhil Sharma</option>
                    <option value="Vikram Seth">Vikram Seth</option>                                        
                </select>
            </form>
        </div>
        </>
     );
}
 
export default Create;