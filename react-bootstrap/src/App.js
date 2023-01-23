import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "react-bootstrap/Alert";
import "./css/style.css";

function App() {
  return (
    //bootstrap  - react-bootstrap
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Oh snap! You got an error!</strong>
      <p>Change this and that and try again.</p>
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>

      <Alert dismissible variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>Change this and that and try again.</p>
      </Alert>
      <div className="kutu"></div>
      <div className="kutu1"></div>
      <div className="kutu2"></div>
    </div>
  );
}

export default App;
//bootstrapi paket olarak indirdikten sonra import ediyoruz bu şekilde classnameler ile kullanabiliriz
// ancak devamında react-bootstrap kütüphanesini indirerek Bootstrap işlevselliğini React'in sanal DOM'sine
// dahil ederek daha güvenilir bir çözüm sunar.

//sass içine de bootstrap dahil edebiliriz.
