import React, { Component, Fragment } from 'react'
import Posts from '../../../component/Posts/Posts'
import './BlogPost.css'
import axios from 'axios'


class BlogPost extends Component {
    
    // State Awal
    state={
    post: [],
        formBlogPost:{
            id: 1,
            title:'',
            body:'',
            userId:1
        },
        isUpdate:false

    }

    //Menampilkan Data
    getPostApi = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then((result)=> {
            console.log(result.data);
            this.setState({
                post:result.data
            })
        })
    }

    // Hapus Data
    handleRemove = (id) => {
        console.log(id);
        axios.delete(`http://localhost:3004/posts/${id}`).then((response) => {
          this.getPostApi();
        });
    };

    postDataToAPI = () => {
        // api untuk tambah data dari valu formBlogSpot
        axios.post("http://localhost:3004/posts", this.state.formBlogPost).then(
          (response) => {
            console.log(response);
            // ketika sudah ditambahkan langsung jalankan method supaya langsung reload
            this.getPostApi();
            // this.resetForm();
            this.setState({
                isUpdate:false,
                formBlogPost:{
                  id: 1,
                  title:'',
                  body:'',
                  userId:1
              },
            })

          },
   
        );
      };




    //method untuk mengabil value dari form
    handleFormChange = (event) => {
        // membuat var baru yang sama dengan nilai awal
        let formBlogPostNew = {...this.state.formBlogPost};

        //membuat value id dari date
        let timeStamp = new Date().getTime();
        if(!this.state.isUpdate) {
            formBlogPostNew['id'] = timeStamp;
        }
        //mengubah data name dengan value yang diisi
        formBlogPostNew[event.target.name] = event.target.value;
        // console.log('neew, value', formBlogPostNew)


        // let title = event.target.value
        this.setState({
            formBlogPost:formBlogPostNew
        })
    }

    putDataToApi = () => {
        // console.log(data);
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((response) => {
          this.getPostApi();
          this.setState({
            isUpdate:false,
            formBlogPost:{
              id: 1,
              title:'',
              body:'',
              userId:1
          },
        })
        });

    }

    // Update
    handleUpdate = (data) => {
        this.setState({
            formBlogPost:data,
            isUpdate:true
        })
    }
      
    
    

    handleSubmit = () => {
    // Memanggil method postDataApi
    if(this.state.isUpdate) {
        this.putDataToApi()
        
    }else{
        this.postDataToAPI(); 
    }
    }

    
    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`)

    }


    //Get Data All
    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post:json
        //     })
        // })


        this.getPostApi();
    }



    render() {
        return (
            <Fragment>

            <p>Halaman BlogPost</p>
            <hr />
                <p>BlogPost</p>

                {/* Form Tambah Data */}
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title"  value= {this.state.formBlogPost.title }  placeholder="add title" onChange={this.handleFormChange}/>
                    <label htmlFor="body">Content</label>
                    <textarea type="text" name="body" value= {this.state.formBlogPost.body } placeholder="add title" onChange={this.handleFormChange}/> 
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button> {/* ketika diklik akan mengarah ke metdhod handle submit */}
                </div>
                {
                    this.state.post.map(post=> {
                        return <Posts key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail}/>

                    })
                }
                
                
            </Fragment>
        )
    }
}

export default BlogPost;
