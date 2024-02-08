<template>
  <div class="page-wrapper">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 col-12">
          <div class="display-side">
            <div class="display-txt">
              <p class="arrivals">NEW ARRIVALS</p>
              <h1>JUST</h1>
              <h1>FOR</h1>
              <h1>YOU</h1>
            </div>
            <div class="display-img">
              <img src="@/assets/images/a.png" class="w-100" alt="" />
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 text-center">
          <div class="form-side">
            <h5>ICONIC LIFESTYLE</h5>
            <div class="sign-links d-flex">
              <div class="sign">
                <div class="line"></div>
                <div class="line2 d-none"></div>
                <h6>Sign-in</h6>
              </div>

              <div class="sign">
                <div class="line d-none"></div>
                <div class="line2"></div>
                <h6>Sign-up</h6>
              </div>
            </div>
            <form id="form">
              <div class="input-group">
                <input type="email" placeholder="enter your email" class="input-field" />
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 448 512">
                    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                    <path
                      d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                    />
                  </svg>
                </div>
              </div>
              <div class="input-group">
                <input type="password" placeholder="enter your password" class="input-field" />
                <div class="icon">
                  <svg height="1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                    <path
                      d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
                    />
                  </svg>
                </div>
              </div>

              <div class="pass-reminder mt-5 d-flex">
                <div class="checkbox"><input type="checkbox" /> Remember Me</div>
                <div>
                  <h6 class="password">Forgot Password?</h6>
                </div>
              </div>

              <div>
                <button type="submit" class="sign-in-btn mt-4">Sign In</button>
              </div>

              <div>
                <p class="account mt-3">New on our Platform? Create an Account</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.display-txt {
  padding-left: 30px;
  margin-top: 13em;
}
.arrivals {
  font-size: 30px;
  margin-bottom: 5px;
  line-height: 0;
}
.page-wrapper {
  background-color: #fff;
  width: 100%;
}

.page-wrapper .display-side {
  background-color: rgb(89, 28, 203);
  height: 95vh;
  border-radius: 15px;
  display: flex;
  position: relative;
  border: 1px solid red;
}
.display-side .display-text,
p {
  color: #fff;
  font-weight: 200;
  font-size: 18px;
}

.display-side .display-txt h1 {
  font-size: 70px;
  font-weight: 700;
  color: #fff;
  line-height: 1;
  margin: 0;
}

.display-side .display-txt span {
  font-size: 10px;
  font-weight: 700;
  color: #ffa233;
  display: block;
}
.display-side .display-img {
  position: absolute;
  height: 100%;
  top: 10em;
  left: 20em;
  width: 100%;
}
.display-side .display-img img {
  height: 100%;
  width: 100%;
  object-fit: contain;
  /*height: 440px;
  width: 380px;
  position: absolute;
  bottom: 0;
  right: -18px; */
}

.page-wrapper .form-side .sign-links {
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 17px 0px;
}

.sign-links .sign .line {
  height: 3px;
  width: fit content;
  background-color: rgb(89, 28, 203);
  box-shadow: rgba(76, 76, 118, 0.479) 0px 3px 2px;
}
.sign-links .sign .line2 {
  height: 1px;
  width: fit content;
  background-color: rgb(110, 109, 111);
}

.sign-links .sign h6 {
  font-size: 13px;
  margin: 7px;
}

form .input-field {
  margin: 10px 0px;
  width: 100%;
  height: 40px;
  border: 0;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 3px 2px;
  padding-left: 50px;
}

form .input-group .icon {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 40px;
}
.pass-reminder {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.password {
  color: black;
  font-size: 14px;
  font-weight: 400;
}

.sign-in-btn {
  width: 100%;
  height: 40px;
  background-color: rgb(89, 28, 203);
  border: 0;
  color: #fff;
  border-radius: 8px;
}
.account {
  color: #000;
  font-weight: 400;
}
@media only screen and (max-width: 992px) {
  .page-wrapper .display-side .display-img {
    display: none;
  }
}
@media only screen and (max-width: 800px) {
  .page-wrapper .display-side .display-img {
    display: none !important;
  }
}

@media only screen and (max-width: 600px) {
  .page-wrapper .display-side {
    display: none !important;
  }
}
@media only screen and (max-width: 751px) {
  .display-side {
    display: none !important;
  }
}
@media only screen and (max-width: 767px) {
  .display-side {
    display: none !important;
  }
}
</style>
