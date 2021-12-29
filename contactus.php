<?php $page ='contact' ?>
<?php include './partials/top.php' ?>
<?php include './partials/header.php' ?>





<div class="container marg50" style="padding-top:50px">
  <div class="row">
    <div class="col-lg-12">
      <div class="welcome">
        <div class="wel_cen marg50">
          <h2>Our Office Location</h2>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="marg50">
  <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60274.59168788896!2d72.81068442738832!3d19.23177112155761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b128b333e163%3A0x985640540577af7e!2sBorivali%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1640372137901!5m2!1sen!2sin">
  </iframe>
</div>
<div class="container marg50">
  <div class="row">
    <div class="col-lg-4 col-sm-4">
      <div class="welcome_page">
        <h3>Information</h3>
      </div>
      <p class="adress_cont">
        <i class="fa fa-home icon_foot"></i> Adress:  Borivali, Mumbai, Maharashtra, India<br>
        <i class="fa fa-phone icon_foot"></i> Phone:  +91 9967253401<br>
        <i class="fa fa-envelope icon_foot"></i> Email: puppethouse178@gmail.com <br>
      
      </p>
      <div class="welcome_page">
        <h3>Business Hours</h3>
      </div>
      <p class="adress_cont">
        <i class="fa fa-unlock icon_foot"></i> Weekday: 9am to 5pm<br>
        <i class="fa fa-lock icon_foot"></i> Sunday: closed
      </p>
      <div class="welcome_page">
        <h3>Social Network</h3>
      </div>
      <div class="soc_about">
        <ul>
          <li><a href="https://www.facebook.com/puppetryhouse/" class="tooltip_s" data-placement="bottom" data-original-title="Facebook"> <i class="fa fa-facebook"></i></a></li>
          <li><a href="https://www.instagram.com/invites/contact/?i=ik6qjofq1xxo&amp;utm_content=38hh32t" class="tooltip_s" data-placement="bottom" data-original-title="Instagram"> <i class="fa fa-instagram"></i></a></li>
          <li><a href="https://www.youtube.com/channel/UCJCXw-nVwXtq-RY0I7j30Ug" class="tooltip_s" data-placement="bottom" data-original-title="Youtube"> <i class="fa fa-youtube-play"></i></a></li>
          <!--
                <li><a href="#" class="tooltip_s" data-placement="bottom" data-original-title="Twitter"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#" class="tooltip_s" data-placement="bottom" data-original-title="Flickr"><i class="fa fa-flickr"></i></a></li>
                <li><a href="#" class="tooltip_s" data-placement="bottom" data-original-title="LinkedIn"><i class="fa fa-linkedin"></i></a></li>
                <li><a href="#" class="tooltip_s" data-placement="bottom" data-original-title="Google Plus"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#" class="tooltip_s" data-placement="bottom" data-original-title="Github"><i class="fa fa-github-alt"></i></a></li>
                <li><a href="#" class="tooltip_s" data-placement="bottom" data-original-title="Dribbble"><i class="fa fa-dribbble"></i></a></li>
                <li><a href="#" class="tooltip_s" data-placement="bottom" data-original-title="Linux"><i class="fa fa-linux"></i></a></li>
                <li><a href="#" class="tooltip_s" data-placement="bottom" data-original-title="Pinterest"><i class="fa fa-pinterest-square"></i></a></li>
                <li><a href="#" class="tooltip_s" data-placement="bottom" data-original-title="Stack Overflow"><i class="fa fa-stack-overflow"></i></a></li>
                <li><a href="#" class="tooltip_s" data-placement="bottom" data-original-title="Weibo"><i class="fa fa-weibo"></i></a></li>
                <li><a href="#" class="tooltip_s" data-placement="bottom" data-original-title="Youtube"><i class="fa fa-youtube"></i></a></li>
                <li><a href="#" class="tooltip_s" data-placement="bottom" data-original-title="Android"><i class="fa fa-android"></i></a></li>
                <li><a href="#" class="tooltip_s" data-placement="bottom" data-original-title="Dropbox"><i class="fa fa-dropbox"></i></a></li>
                <li><a href="#" class="tooltip_s" data-placement="bottom" data-original-title="Foursquare"><i class="fa fa-foursquare"></i></a></li>
                <li><a href="#" class="tooltip_s" data-placement="bottom" data-original-title="Tumblr"><i class="fa fa-tumblr"></i></a></li>
                <li><a href="#" class="tooltip_s" data-placement="bottom" data-original-title="Apple"><i class="fa fa-apple"></i></a></li>
                <li><a href="#" class="tooltip_s" data-placement="bottom" data-original-title="Skype"><i class="fa fa-skype"></i></a></li>
                <li><a href="#" class="tooltip_s" data-placement="bottom" data-original-title="Vimeo"><i class="fa fa-vimeo-square"></i></a></li>
                <li><a href="#" class="tooltip_s" data-placement="bottom" data-original-title="Vk"><i class="fa fa-vk"></i></a></li>-->
        </ul>
      </div>
    </div>
    <div class="col-lg-8 col-sm-8">
      <div class="welcome_page cont-marg">
        <h3>Contact Form</h3>
      </div>
    
      <form action="/puppetryhouse/assets/php/send.php" method="post" id="contactForm">
        <span class="input">
          <p class="about_text input marg"><input type="text" name="name" placeholder="Your name" class="contact"
              size="40"></p>
          <div class="alert alert-danger error" id="nameError"><i class="fa fa-times"></i> Oh snap! This field can't
            stay empty.</div>
        </span>
        <span class="input">
          <p class="about_text input"><input type="text" name="email" placeholder="Your e-mail" class="contact"
              size="40"></p>
          <div class="alert alert-danger error" id="emailError"><i class="fa fa-times"></i> Oh snap! There was a mistake
            when writing a e-mail.</div>
        </span>
        <span class="input">
          <p class="about_text input"><input type="text" name="subject" placeholder="Subject" class="contact" size="40">
          </p>
          <div class="alert alert-danger error" id="subjectError"><i class="fa fa-times"></i> Oh snap! This field can't
            stay empty.</div>
        </span>
        <span class="input">
          <p class="about_text input"><textarea name="message" placeholder="Your message" id="message"
              class="contact_width" cols="40" rows="10"></textarea></p>
          <div class="alert alert-danger error" id="messageError"><i class="fa fa-times"></i> Oh snap! This field can't
            stay empty.</div>
        </span>
        <div class="alert alert-success success" id="success"><i class="fa fa-check"></i> Well done! You message is
          successfully sent.</div>
        <p><input type="submit" id="send" class="btn btn-default btn-small" value="Send message" /></p>
      </form>
    </div>
  </div>
</div>

<!-- testimonial  -->
<div class="container">
  <div class="row">
    <div class="col-lg-12">
      <div class="welcome">
        <div class="wel_cen marg100">
          <h2>Happy Testimonial Customers</h2>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="prl-2 marg50 animated-area" id="testimonial-full">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="flexslider testi-slider animated" data-animation-delay="0.5s" data-animation="bounceInUp">
          <ul class="slides">
            <li>
              <div class="client-test marg50 marg0">
                <p>"It was a plesure to see you all performing today. We really appriciate you works."
                </p>
                <p class="client-name">Neharika Jain</p>
              </div>
            </li>
            <li>
              <div class="client-test marg50 marg0">
                <p>"Show was really amazing , The children ware laughing entire time due to show and I
                  personally loved the opportunity to meet the such a Puppeteers "
                </p>
                <p class="client-name">Mahi Madiye</p>
              </div>
            </li>
            <li>
              <div class="client-test marg50 marg0">
                <p>"Lovely puppet show with a difference, puppets I haven't seen before. My 6 and 9 year
                  old both really enjoyed it. Really simple good humour."
                </p>
                <p class="client-name">Akash Nayak</p>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- end testimonial  -->

<?php include './partials/footer.php' ?>
<?php include './partials/end.php' ?>