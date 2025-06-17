import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Franchise from './pages/Franchise'
import HowItWorks from './pages/HowItWorks'
import Technology from './pages/Technology'
import MerchantBanking from './pages/MerchantBanking'
import Faq from './pages/Faq'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
// Blogs
import BlogPostDispatchSoftware from './pages/Blogs/BlogPostDispatchSoftware'
import BlogPostUKTaxi from './pages/Blogs/BlogPostUKTaxi'
import BlogPostFranchise from './pages/Blogs/BlogPostFranchise'
import BlogCashlessPayments from './pages/Blogs/BlogCashlessPayments'
import BlogPostPOSMachine from './pages/Blogs/BlogPostPOSMachine'
import BlogPostCallCentre from './pages/Blogs/BlogPostCallCentre'
import BlogPostReviews from './pages/Blogs/BlogPostReviews'
import BlogPostMerchantRates from './pages/Blogs/BlogPostMerchantRates'
import BlogPostSocialMedia from './pages/Blogs/BlogPostSocialMedia'
import BlogPostLocalMarketing from './pages/Blogs/BlogPostLocalMarketing'
import BlogPostBrandingPower from './pages/Blogs/BlogPostBrandingPower'
import BlogPostTaxiMistakes from './pages/Blogs/BlogPostTaxiMistakes'
import BlogPostDriverApp from './pages/Blogs/BlogPostDriverApp'
import BlogPostFranchiseVsSolo from './pages/Blogs/BlogPostFranchiseVsSolo'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/franchise-opportunity" element={<Franchise />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/merchant-banking" element={<MerchantBanking />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Blog/best-dispatch-software-for-small-taxi-firms" element={<BlogPostDispatchSoftware />} />
        <Route path="/Blog/how-to-start-a-taxi-business-in-the-uk" element={<BlogPostUKTaxi />} />
        <Route path="/Blog/why-independent-taxi-operators-are-thriving" element={<BlogPostFranchise />} />
        <Route path="/Blog/why-cashless-payments-are-key-to-growing-your-taxi-business" element={<BlogCashlessPayments />} />
        <Route path="/Blog/choosing-the-right-pos-machine-for-your-office" element={<BlogPostPOSMachine />} />
        <Route path="/Blog/how-a-call-centre-can-save-you-thousands" element={<BlogPostCallCentre />} />
        <Route path="/Blog/how-to-collect-customer-reviews-and-grow-trust" element={<BlogPostReviews />} />
        <Route path="/Blog/how-to-get-the-best-merchant-account-rates" element={<BlogPostMerchantRates />} />
        <Route path="/Blog/how-to-run-social-media-for-your-cab-company" element={<BlogPostSocialMedia />} />
        <Route path="/Blog/local-marketing-strategies-for-taxi-operators" element={<BlogPostLocalMarketing />} />
        <Route path="/Blog/the-power-of-branding-in-the-transport-industry" element={<BlogPostBrandingPower />} />
        <Route path="/Blog/top-mistakes-new-taxi-businesses-make" element={<BlogPostTaxiMistakes />} />
        <Route path="/Blog/why-driver-apps-matter-for-modern-taxi-companies" element={<BlogPostDriverApp />} />
        <Route path="/Blog/why-franchising-is-better-than-going-alone" element={<BlogPostFranchiseVsSolo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App