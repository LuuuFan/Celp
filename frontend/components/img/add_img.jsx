import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import {Link} from 'react-router-dom';

class AddImg extends React.Component {
  constructor(props){
    super(props);
    this.state = {img:[]};
  }

  componentDidMount(){
    this.props.requestBiz(this.props.match.params.bizId);
  }

  componentWillReceiveProps(newProps){
    if (!this.props.biz) {
      this.props.requestBiz(this.props.match.params.bizId);
    }
  }

  cloudinary(){
    cloudinary.openUploadWidget({ cloud_name: 'ddwejrtgh', upload_preset: 'l8du0kzb'},
      (errors, result) => {
          if (errors) {
            console.log(errors);
          }
        result.forEach(file=> {
          let img = {url: file.url, description: ''}
          this.setState({img: this.state.img.concat([img])});
        });
      });
  }

  handleClick(e){
    e.preventDefault();
    this.state.img.forEach(img => {
      this.props.createImg(this.props.biz.id, img).then(this.props.history.push(`/biz/${this.props.biz.id}`));
    });
  }

  render(){
    const {biz} = this.props;
    return(
      <div className='upload-photo-page'>
        <div>
            {biz ?
              <div>
                <h1><a href={`/#/biz/${biz.id}`}>{biz.name}:</a> Your Photos</h1>
                <a href={`/#/biz/${biz.id}/photos`}>View all photos</a>
              </div>
            : ""}

          <button className='invokeCloudinary' onClick={()=>this.cloudinary()}>Click to upload images</button>
        </div>
        <div className='uploadImgGroup group'>
          { this.state.img ?
            this.state.img.map((img, idx)=>
              <div key={idx} className='addImgContainer'>
                <div className='uploadedImg'>
                  <div className='deleteUpload'>
                    <i className="fas fa-trash-alt"></i>
                  </div>
                  <img src={`${img.url}`} />
                </div>
                <textarea placeholder='Add a caption'/>
              </div>
            ) : ''
          }
        </div>
        { this.state.img.length > 0 ?
          <div className='finish-upload'>
            <button onClick={(e)=>this.handleClick(e)}>Finish</button>
          </div> : ""}
        </div>
    );
  }
}

export default AddImg;

// <div className='uploadImgGroup group'>
//   <div className='addImgContainer'>
//     <div className='uploadedImg'>
//       <div className='deleteUpload'>
//         <i className="fas fa-trash-alt"></i>
//       </div>
//       <img src='http://res.cloudinary.com/ddwejrtgh/image/upload/v1517642020/celp/IMG_2236_vydurt.jpg' />
//     </div>
//     <textarea placeholder='Add a caption'/>
//   </div>
// </div>
