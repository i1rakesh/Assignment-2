import "./formStyle.css";
import { Card, Button } from "@mui/material";
const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const str = e.target[0].value;
    const letter = e.target[1].value;
    if (str.indexOf(letter) === -1) {
      alert("Letter does not exist in the string");
    } else {
      const afterLetter = str.substring(str.indexOf(letter) + 1);
      console.log("Substring:", afterLetter);
    }
  };

  return (
    <Card>
      <div className="heading-container">
        <h1>Assigment-2</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <div className="field">
              <label>Sentence</label>
              <input type="text" id="string" placeholder="string here" />
            </div>
            <div className="field">
              <label>Letter</label>
              <input type="text" id="letter" placeholder="letter here" />
            </div>
            <Button sx={{ marginBottom:2,marginTop:2, float: "right" }} variant="contained" id="button" type="submit">
              Submit
            </Button>
          </div>
        </form>
        
      </div>
      <h2>Output in Console</h2>
    </Card>
  );
};
export default Home;
