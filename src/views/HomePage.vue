<template>
  <div class="d-flex justify-content-center mt-3">
    <button
      class="btn btn-danger me-4"
      v-if="loginStatus"
      v-on:click="homePage()"
    >
      Home
    </button>
    <button class="btn btn-dark" v-if="loginStatus" v-on:click="loginPage()">
      Login
    </button>
    <button class="btn btn-dark" v-if="!loginStatus" v-on:click="logOut()">
      LogOut
    </button>
  </div>
  <span v-if="this.loginStatus">
    <div
      class="justify-content-center align-items-center d-flex"
      style="height: 50vh"
    >
      <p>Please Login To read News</p>
    </div>
  </span>
  <span v-else-if="this.loginStatus == false">
    <main>
      <!-- Whats New Start -->
      <section class="whats-news-area pt-50 pb-20">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="d-flex align-items-center">
                <div class="col-lg-3 col-md-3 aligm-items-center">
                  <div class="section-tittle">
                    <h3>Whats New</h3>
                  </div>
                </div>
                <div class="col-lg-9 col-md-9">
                  <div class="properties__button mt-4">
                    <!--Nav Button  -->
                    <nav>
                      <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a
                          class="nav-item nav-link active"
                          id="nav-home-tab"
                          data-toggle="tab"
                          href="details.htmlnav-home"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                          v-on:click="searchCategory('')"
                          >All</a
                        >
                        <a
                          class="nav-item nav-link"
                          id="nav-profile-tab"
                          data-toggle="tab"
                          href="details.htmlnav-profile"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                          v-for="(category, index) in categoryList"
                          :key="index"
                          v-on:click="searchCategory(category.title)"
                          >{{ category.title }}</a
                        >
                      </div>
                    </nav>
                    <!--End Nav Button  -->
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="offset-9 mb-4 col-lg-3 d-flex align-items-center">
                  <input
                    class="form-control"
                    type="text"
                    v-model="searchKey"
                    v-on:keyup.enter="searchPost()"
                  />
                  <div class="ms-3">
                    <i
                      class="fa-solid fa-magnifying-glass"
                      style="font-size: x-large"
                    ></i>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <!-- Nav Card -->
                  <div class="tab-content" id="nav-tabContent">
                    <!-- card one -->
                    <div
                      class="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div class="whats-news-caption">
                        <div class="row">
                          <div
                            class="justify-content-center align-items-center d-flex"
                            style="height: 50vh"
                            v-if="postLists.length == 0"
                          >
                            <p>There is no Posts</p>
                          </div>
                          <div
                            class="col-lg-6 col-md-6"
                            v-else-if="postLists.length != 0"
                            v-for="(post, index) in postLists"
                            :key="index"
                          >
                            <div
                              class="single-what-news mb-100"
                              v-on:click="postDetail(post.post_id)"
                            >
                              <div class="what-img">
                                <img :src="post.image" alt="" />
                              </div>
                              <div class="what-cap">
                                <span class="color1">AZ News</span>
                                <h4>
                                  <a href="details.html">{{ post.title }}</a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Nav Card -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Whats New End -->

      <!--Start pagination -->
      <div class="pagination-area pb-45 text-center">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="single-wrap d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-start">
                    <li class="page-item">
                      <a class="page-link" href="details.html"
                        ><span class="flaticon-arrow roted"></span
                      ></a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link" href="details.html">01</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="details.html">02</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="details.html">03</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="details.html"
                        ><span class="flaticon-arrow right-arrow"></span
                      ></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End pagination  -->
    </main>
  </span>
</template>

<script src="../js/homePage.js"></script>
