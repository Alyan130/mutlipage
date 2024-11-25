import "./buy.css";
const GamePurchaseForm = () => {
    return (
      <div className="form-container">
        <h1 className="form-title">Assassins Creed <span> Valhalla</span></h1>
        <p className="form-subtitle">Order your game now!</p>
  
        <form className="game-form">
          {/* Personal Information */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" name="name" className="form-input" placeholder="Your Full Name" />
          </div>
  
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" name="email" className="form-input" placeholder="Your Email Address" />
          </div>
  
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="tel" id="phone" name="phone" className="form-input" placeholder="Your Phone Number" />
          </div>
  
          {/* Shipping Details */}
          <div className="form-group">
            <label htmlFor="address" className="form-label">Address</label>
            <textarea id="address" name="address" className="form-textarea" placeholder="Your Shipping Address"></textarea>
          </div>
  
          <div className="form-group">
            <label htmlFor="city" className="form-label">City</label>
            <input type="text" id="city" name="city" className="form-input" placeholder="City" />
          </div>
  
          <div className="form-group">
            <label htmlFor="postalCode" className="form-label">Postal Code</label>
            <input type="text" id="postalCode" name="postalCode" className="form-input" placeholder="Postal Code" />
          </div>
  
          {/* Game Edition */}
          <div className="form-group">
            <label htmlFor="edition" className="form-label">Game Edition</label>
            <select id="edition" name="edition" className="form-select">
              <option value="standard">Standard Edition</option>
              <option value="deluxe">Deluxe Edition</option>
              <option value="ultimate">Ultimate Edition</option>
            </select>
          </div>
  
          {/* Payment Information */}
          <div className="form-group">
            <label htmlFor="cardNumber" className="form-label">Card Number</label>
            <input type="text" id="cardNumber" name="cardNumber" className="form-input" placeholder="Card Number" />
          </div>
  
  
          <button type="submit" className="form-button">Order Now</button>
        </form>
      </div>
    );
  };
  
  export default GamePurchaseForm;
  