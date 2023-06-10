import { useFormik } from 'formik';
import axios from 'axios';
import './detailList.css';
import { useNavigate  } from 'react-router-dom';
import { API } from '../global/imp';



function DetailsList(){

  const navigate = useNavigate();


const formik = useFormik({
    initialValues: {
    NameoftheUPSI: '',
    InfoSharedBy: '',
    PANNumber1:'',
    InfoSharedwithrespectto: '',
    InsiderTypes: '',
    InfoSharedTo: '',
    PANNumber2:'',
    TypeofOrganization: '',
    NameoftheOrganization: '',
    DateandTimeofSharing: '',
    ParticularofInfoShared: '',
    PurposeofSharing: '',
    ModeofSharing: '',
},



onSubmit:  async(values) => { 
 console.log("hi");
  console.log(values);
      const result = await axios.post(`${API}/detailsnewform`, values);
      console.log(result);
       window.alert("🎉✨ Form Submitted Successfully! 🎉✨");
        window.location.reload();
      
 }
 });


 async function handleLogout() {
  try {
    navigate('/');
  } catch (error) {
    console.log(error);
  }
}

return (
<form onSubmit = { formik.handleSubmit }>
<div>
<div>



<div className="mb-5 row"></div>   
<div className="mb-3 row">
<label htmlFor="text" className="col-sm-2 col-form-label">Name of the UPSI:</label>
<div className="col-sm-2">
<input type="text" onChange={formik.handleChange} name="NameoftheUPSI" className="inputPassword"/>
</div>


</div>
<div className="mb-3 row">
<label htmlFor="inputPassword" className="col-sm-2 col-form-label">Info Shared By:</label>
<div className="col-sm-2">
<input type="text" onChange={formik.handleChange} name="InfoSharedBy" className="inputPassword"/>
</div>
</div>


<div className="mb-3 row">
<label htmlFor="inputPassword" className="col-sm-2 col-form-label">PAN Number1:</label>
<div className="col-sm-2">
<input type="text" onChange={formik.handleChange} name="PANNumber1" className="inputPassword"/>
</div>
</div>


<div className="mb-3 row">
<label htmlFor="text" className="col-sm-2 col-form-label">Info Shared with respect to:</label>
<div className="col-sm-3">
<select className="form-select form-select-lg mb-3" onChange={formik.handleChange} name="InfoSharedwithrespectto" aria-label=".form-select-lg example">
<option defaultValue="None">--- Select ---</option>
<option value="Designated Person">Designated Person</option>
<option value="Insider">Insider</option>
<option value="UPSI Project">UPSI Project</option>
</select>
</div>
</div> 


<div className="mb-3 row">
<label htmlFor="text" className="col-sm-2 col-form-label">Insider Types:</label>
<div className="col-sm-3">
<select className="form-select form-select-lg mb-3" onChange={formik.handleChange} name="InsiderTypes" aria-label=".form-select-lg example">
<option defaultValue="None">--- Select ---</option>
<option value="Director">Director</option>
<option value="Managing Director">Managing Director</option>
<option value="Independent Director">Independent Director</option>
<option value="CFO">CFO</option>
<option value="Company Secretary">Company Secretary</option>
<option value="Auditor">Auditor</option>
<option value="Company Secretary - In Practice">Company Secretary - In Practice</option>
<option value="Others">Others</option>
</select>
</div>
</div>
</div>
  

<div className="mb-3 row">
<label htmlFor="text" className="col-sm-2 col-form-label">Insider Signed Confidentially Agreement:</label>
<div className="col-sm-10">
<label htmlFor="text" className="col-sm-2 col-form-label" style={{color:"red", whiteSpace: "nowrap"}}>No Confidentially Agreement Signed</label>
</div>
</div>


<div className="mb-3 row">
<label htmlFor="text" className="col-sm-2 col-form-label">Info Shared To:</label>
<div className="col-sm-2">
<input type="text"  onChange={formik.handleChange} name="InfoSharedTo" className="inputPassword"/>
</div>

<div className="mb-3 row">
<label htmlFor="inputPassword" className="col-sm-2 col-form-label">PAN Number2:</label>
<div className="col-sm-2">
<input type="text"  onChange={formik.handleChange} name="PANNumber2" className="inputPassword"/>
</div>
</div>


<div className="mb-3 row">
<label htmlFor="text" className="col-sm-2 col-form-label">Type of Organization:</label>
<div className="col-sm-3">
<select className="form-select form-select-lg mb-3" onChange={formik.handleChange} name="TypeofOrganization" aria-label=".form-select-lg example">
<option defaultValue="None">--- Select ---</option>
<option value="Partnership">Partnership</option>
<option value="Individual">Individual</option>
<option value="Company">Company</option>
</select>
</div>
</div>

  
<div className="mb-3 row">
<label htmlFor="text" className="col-sm-2 col-form-label">Name of the Organization:</label>
<div className="col-sm-2">
<input type="text"  onChange={formik.handleChange} name="NameoftheOrganization" className="inputPassword"/>
</div>
</div>


<div className="mb-3 row">
<label htmlFor="text" className="col-sm-2 col-form-label">Date and Time of Sharing:</label>
<div className="col-sm-2">
<input type="date" id="date" onChange={formik.handleChange}  name="DateandTimeofSharing" />
<script src="date.js"></script> 
</div>
</div>


<div className="mb-3 row">
<label htmlFor="text" className="col-sm-2 col-form-label">Particular of Info Shared:</label>
<div className="col-sm-2">
<input type="text"  onChange={formik.handleChange} name="ParticularofInfoShared" className="inputPassword"/>
</div>
</div>


<div className="mb-3 row">
<label htmlFor="text" className="col-sm-2 col-form-label">Purpose of Sharing:</label>
<div className="col-sm-2">
<input type="text"  onChange={formik.handleChange} name="PurposeofSharing" className="inputPassword"/></div>


<div className="mb-3 row">
<label htmlFor="text" className="col-sm-2 col-form-label">Mode of Sharing:</label>
<div className="col-sm-3">
<select className="form-select form-select-lg mb-3" onChange={formik.handleChange} name="ModeofSharing" aria-label=".form-select-lg example">
<option defaultValue="None">--- Select ---</option>
<option value="Email">Email</option>
<option value="Physical">Physical</option>
<option value="Pendrive">Pendrive</option>
</select> 

<div className="cell"></div>


<div className="mb-3 row">
<button onSubmit={formik.handleChange} type = "submit" >SUBMIT</button> 


<div style={{ marginTop: '20px' }}>
<button
              type="button"
              onClick={handleLogout}
              style={{
                backgroundColor: 'blue',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
                   Logout
            </button>
</div>

</div>
</div>
</div> 
</div>
</div>
</div>
</form>

  )
  }

  export default DetailsList;
