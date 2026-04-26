"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import affiliationsData from "@/data/affiliations.json";

export default function JoinPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  // Step 1: Agreement State
  const [agreed, setAgreed] = useState(false);

  // Step 2: Form Data
  const [formData, setFormData] = useState({
    countryCode: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    korName: "",
    title: "",
    degree: "",
    degreeOther: "",
    category: "",
    categoryOther: "",
    companyName: "",
    affiliationCode: "",
    affiliationEng: "",
    departmentEng: "",
    mobilePhone: "",
    dietary: "None",
    dietaryOther: "",
    residentKor: "2", // 1: Yes, 2: No
    licenseGbn: "0", // 1: 의사, 2: 간호사, 0: 면허번호없음
    licenseNo: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const countries = [
    { code: "kr", name: "South Korea" },
    { code: "us", name: "United States" },
    { code: "jp", name: "Japan" },
    { code: "cn", name: "China" },
    { code: "uk", name: "United Kingdom" },
    { code: "de", name: "Germany" },
    { code: "fr", name: "France" },
    { code: "it", name: "Italy" },
    { code: "au", name: "Australia" },
    { code: "ca", name: "Canada" },
    { code: "in", name: "India" },
    { code: "br", name: "Brazil" },
    { code: "ot", name: "Other" },
  ]; // Condensed for simplicity, normally use a full country list

  const handleNextStep1 = () => {
    if (!agreed) {
      alert("You must agree to the collection and use of personal information.");
      return;
    }
    setStep(2);
    window.scrollTo(0, 0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Password is not correct.");
      setLoading(false);
      return;
    }

    try {
      // API call to backend (mocked for now)
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          password: formData.password,
          affiliation: formData.affiliationCode === "999" || formData.countryCode !== "kr" ? formData.affiliationEng : formData.affiliationCode,
        }),
      });

      if (res.ok) {
        setStep(3);
        window.scrollTo(0, 0);
      } else {
        const data = await res.json();
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f7f7f7] min-h-screen py-10 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Image (Placeholder similar to sub_img01.jpg) */}
        <div className="w-full h-32 md:h-48 bg-gray-300 mb-8 rounded-sm overflow-hidden flex items-center justify-center relative bg-[url('/images/sub_img01.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40"></div>
          <h2 className="relative z-10 text-white text-3xl md:text-4xl font-bold tracking-wide drop-shadow-md">Sign-up</h2>
        </div>

        <div className="bg-white p-6 md:p-10 border border-gray-200 shadow-sm rounded-sm">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">Sign-up</h3>

          {/* Stepper */}
          <div className="flex justify-center mb-10 overflow-hidden">
            <ul className="flex w-full max-w-3xl text-center items-center">
              <li className={`flex-1 relative ${step === 1 ? "text-white" : "text-gray-500 bg-gray-100"}`}>
                <div className={`py-3 text-sm md:text-base font-semibold border ${step === 1 ? "bg-primary border-primary" : "border-gray-200"}`}>
                  1. Privacy Policy Agreement
                </div>
              </li>
              <li className={`flex-1 relative ${step === 2 ? "text-white" : "text-gray-500 bg-gray-100"}`}>
                <div className={`py-3 text-sm md:text-base font-semibold border-t border-b border-r ${step === 2 ? "bg-primary border-primary" : "border-gray-200"}`}>
                  2. Create Account
                </div>
              </li>
              <li className={`flex-1 relative ${step === 3 ? "text-white" : "text-gray-500 bg-gray-100"}`}>
                <div className={`py-3 text-sm md:text-base font-semibold border-t border-b border-r ${step === 3 ? "bg-primary border-primary" : "border-gray-200"}`}>
                  3. Complete
                </div>
              </li>
            </ul>
          </div>

          {/* STEP 1: Agreement */}
          {step === 1 && (
            <div>
              <div className="border border-gray-300 p-4 h-80 overflow-y-scroll text-sm text-gray-700 bg-white mb-6 space-y-3">
                <h4 className="text-center text-primary font-bold text-lg mb-4">Privacy Policy for the Participants of ISLS</h4>
                
                <h5 className="font-bold mt-4 mb-2">This policy was last updated on April 9, 2018.</h5>
                <p>This website is operated by the secretariat (hereafter referred to as 'SECRETARIAT' or 'We') of the ISLS (hereafter referred to as 'EVENT'), and this privacy policy applies to this website only.</p>
                <p>At <a href="http://www.isls-liversurgeon.org" className="text-blue-600 hover:underline">www.isls-liversurgeon.org</a> (hereafter referred to as 'WEBSITE'), the SECRETARIAT respects its participants and understands that you are concerned about privacy. We are posting this privacy policy to let you know what kind of information we collect, how it is handled, with whom it may be shared, what choices you have regarding the SECRETARIAT's use of your information, and how you may access some of the data you provide to the SECRETARIAT.</p>
                <p>As the SECRETARIAT continues to develop the WEBSITE and take advantage of technologies to improve the services we offer, the privacy policy may change. We therefore encourage you to refer to this policy on an ongoing basis so that you understand the SECRETARIAT's current privacy policy.</p>
                <p>If you have any questions about this policy, please contact our Privacy Protection Manager at <a href="mailto:isls@isls-society.org" className="text-blue-600 hover:underline">isls@isls-society.org</a>.</p>

                <h5 className="font-bold mt-6 mb-2 text-primary">What Information Do We Collect?</h5>
                <p>The SECRETARIAT collects various types of information depending upon how you use the WEBSITE:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>When you create account and register for the EVENT, we collect your name, residential address, email address, affiliation as well as the position and some other contact information. All the information collected in this procedure will automatically be saved in "My Page" for ease of reference and to help you to go on to the next step (registration, abstract submission, etc.) as quickly as possible.</li>
                  <li>Our primary goal in collecting personal information including your first name, last name, phone number(s), valid email, residential address, and credit card data is to provide you with a smooth, efficient, customized registration experience.</li>
                  <li>When you submit a question to the administrator by e-mail, we need your email address to respond; you may also provide us with additional information to help the person in charge at the SECRETARIAT answer your question.</li>
                </ul>								

                <h5 className="font-bold mt-6 mb-2 text-primary">What Are Cookies and Do We Use Them?</h5>
                <p>A cookie is a small piece of information sent by a website, which is saved on your hard disk by your computer's browser. It holds information a site may need to interact with you and personalize your experience. At the WEBSITE, we use two kinds of cookies: session cookies and persistent cookies. Session cookies exist only for as long as your browser remains open. Once you exit your browser, they go away. The SECRETARIAT uses session cookies to maintain information we need to have in order for you to register for the EVENT. For example, the Session ID cookie that we ask your browser to hold retains the ID for My Page. Without the Session ID cookie, you cannot add and modify any information that you input at the time of your sign-up.</p>
                <p>Persistent cookies, in contrast, last from visit to visit; they do not go away when you exit your browser. At the WEBSITE, we use persistent cookies to give you a more personalized browse and to help you navigate the WEBSITE more efficiently. The SECRETARIAT will use your information to enhance your site experience. However, you can use the WEBSITE without accepting a persistent cookie. To do so, you should set your browser options to reject persistent cookies. Alternatively, you can set your browser to notify you when you receive a cookie, which gives you the opportunity to decide whether you want to accept it or not. In many instances, the Help button on your browser toolbar will tell you how you can take these steps.</p>
                <p>Cookies can be used by a website to recognize you. But that does not necessarily mean any personal information is stored in the cookies. At the WEBSITE, we store no personal information about you in the cookies. Anything you choose to tell us about yourself (such as your address and email address) is stored safely and separately on our secured servers, and you need to provide a password to access it.</p>
                <p>The SECRETARIAT also uses cookies to look at how groups, rather than individuals, use the WEBSITE. In our administration page, we can observe which aisles and departments are most heavily trafficked and determine the best method to improve the experience for visitors. On the web, cookies help us develop a similar understanding so that we can continue to improve the arrangement, product offerings, registration and abstract submission at the WEBSITE.</p>

                <h5 className="font-bold mt-6 mb-2 text-primary">How Do We Use Your Information?</h5>
                <p>The SECRETARIAT may use your information in a number of ways, including the following:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>To prepare the name tag, meals (for example welcome dinner), and other materials related to the EVENT. In some specific cases, some parts of your information may be shared with the SECRETARIAT's partner companies, which have been carefully selected and approved by us for the preparation of the EVENT.</li>
                  <li>To process any administrative or financial (related to the payment of your registration fee) matters that may arise in preparing for the EVENT.</li>
                  <li>To communicate with you on any matters related to the preparation of the EVENT or to process your request regarding the EVENT.</li>
                  <li>To report on the result of the EVENT to any supporting organizations such as the local convention bureau, some parts of your information may be used (for example, your name, affiliation, e-mail address, etc.).</li>
                  <li>To improve the content on the official website <a href="http://www.isls-liversurgeon.org" className="text-blue-600 hover:underline">www.isls-liversurgeon.org</a> (hereafter referred to as 'WEBSITE'), for example, we may use cookies to find out which parts of the WEBSITE are visited the most often.</li>
                  <li>For marketing and promotional purposes, for example, the SECRETARIAT may send emails and direct mail to our registrants and prospective newsletter recipients who have signed-up for the EVENT about EVENTs that we think may be of interest to them. We also may send you offer for discounts or free services (e.g. early-bird registration) on the WEBSITE.</li>
                </ul>								

                <h5 className="font-bold mt-6 mb-2 text-primary">Do We Share Your Information?</h5>
                <p>The information gathered may be shared with the ISLS Organizing Committee and our family associations. We also share the information with third parties, including responsible committees with which we have a relationship. For example:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>When you make a purchase, the SECRETARIAT may share information about you and your transaction with other companies for the purpose of processing your transaction, including fraud prevention and credit card authorization.</li>
                  <li>You also may make a purchase from the WEBSITE through a link from another website or search engine and may use their express checkout tool to do so. When you do, please be aware that both the WEBSITE and the other website or search engine will receive your information.</li>
                  <li>In some cases, EVENT may enter into a co-branding relationship with another website that offers you services that supplement EVENT's assortment (e.g. tours). In those cases, you may link from the WEBSITE to another site to apply for the program. In that case, both the WEBISTE and the other website may receive your information.</li>
                  <li>The WEBISTE may team up with another website to conduct a sweepstakes or other event. In those cases, each of the participating websites may collect or receive personal information from you.</li>
                  <li>For some of our events, the WEBSITE may provide you with a link to the supplier of that product so that you may get further information. If you link to the supplier's site, the supplier may collect or receive information about you.</li>
                  <li>Like other committees, the WEBSITE may use third party advertising companies to serve ads (e.g. banners or links) on its behalf. These companies may employ cookies and action tags (also known as single pixel gifs or web beacons) to measure advertising effectiveness. Any information that these third parties collect via cookies and action tags is anonymous.</li>
                </ul>
                <p>In most of the above situations, these third parties will receive your information because you will be visiting their websites or using their links and, in doing so, you may provide information directly to them. You therefore should refer to their privacy policies to understand how they handle your information and what kinds of choices you have.</p>
                <p>The SECRETARIAT also may share your personal information with outside companies that perform services for the EVENT. For example, we may retain an outside company to manage a database containing certain participants' information or to create and distribute an email offering. In those situations, the outside party is performing work for the WEBSITE, and the SECRETARIAT includes language in its contracts stating that your information is to be used only to provide the services requested by the SECRETARIAT.</p>
                <p>Additionally, the SECRETARIAT may share account or other information when we believe it is necessary to comply with law or to protect the SECRETARIAT's interests or property. This may include sharing information with other companies, committees, lawyers, credit bureaus, agents or government agencies in connection with issues related to fraud, credit or debt collection.</p>
                <p>In the event that some or all of the business assets of the EVENT are sold or transferred, we generally would transfer the corresponding information about the participants of the EVENT.</p>
                <p>Finally, the SECRETARIAT may share your personal information with unrelated outside companies so that they can directly promote the services to you if we feel that the companies offer services that we believe may be of interest. We also may provide you with the opportunity to create account on our website to receive email offers from other companies.</p>

                <h5 className="font-bold mt-6 mb-2 text-primary">What Choices Do You Have Regarding the Use of Your Information?</h5>
                <p>The SECRETARIAT provides you with a number of choices regarding our handling of your personal information.</p>
                <p>If you wish to change your email preferences, please click on the unsubscribe link at the bottom of any SECRETARIAT's e-mail and describe the request such as "Please do not send me email," or "Keep my email address private."</p>
                <p>Note: Once you have submitted your email opt-out request, you should assume that it has been successfully received and your request is being processed. Please allow us 10 business days from when the request is received to complete the removal, as some of our promotions may already have been in process before you submitted your request.</p>

                <h5 className="font-bold mt-6 mb-2 text-primary">Third Party Sharing</h5>
                <p>You also may use the address and phone number above to request that we not reveal your personal information to unrelated third parties for marketing purposes. If you choose to write to the SECRETAIAT, please include your name, address, and credit card account number to be used for settlement and state "NO THIRD PARTY SHARING" in your request.</p>

                <h5 className="font-bold mt-6 mb-2 text-primary">Can I Access My Information?</h5>
                <p>If you are a user who has already signed up for the EVENT, you can update your information in "My Page," and if you have questions about your status, you may also check them online in "My Page."</p>
                <p>If you would like, you may also an email to the SECRETARIAT.</p>
                <p>Questions regarding your charge account may be forwarded to our Credit Customer Service Department.</p>

                <h5 className="font-bold mt-6 mb-2 text-primary">Is My Information Secure?</h5>
                <p>The SECRETARIAT has put in place various physical, electronic, and managerial procedures to try to safeguard and secure the information we collect online. For example, private account and customer information is located on a secured server behind a firewall; it is not directly connected to the Internet. Encryption is a process by which a message or information is scrambled while it is in transit to the SECRETARIAT. It is based on a key that has two different parts, public and private. The public part of the key is distributed to those with whom you want to communicate. The private part is for the recipient's use only. So long as you use a browser that allows for encryption, when you send personal information to the SECRETARIAT, you use a public key to encrypt your personal information. If your information is intercepted during the transmission, it is scrambled and very difficult to decrypt. Once we receive your encrypted personal information, we use the private part of our key to decode it.</p>
                <p>Please note however that while we implement many security measures on this site, 100% security cannot be guaranteed.</p>
                <p>Thank you for your visit to the WEBSITE. If you have any questions or comments about this policy, please email the SECRETARIAT (<a href="mailto:isls@isls-society.org" className="text-blue-600 hover:underline">isls@isls-society.org</a>).</p>
              </div>

              <div className="bg-gray-100 border border-gray-200 text-center p-4 mb-8 flex items-center justify-center rounded-sm">
                <label className="flex items-center cursor-pointer text-gray-800 font-medium">
                  <input type="checkbox" className="w-5 h-5 mr-3 accent-primary" checked={agreed} onChange={() => setAgreed(!agreed)} />
                  I agree to the collection and use of my personal information.
                </label>
              </div>

              <div className="text-center space-x-4 border-t border-gray-200 pt-6">
                <button type="button" onClick={() => router.push("/")} className="px-8 py-2.5 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-sm transition-colors">
                  Cancel
                </button>
                <button type="button" onClick={handleNextStep1} className="px-8 py-2.5 bg-primary hover:bg-red-800 text-white font-medium rounded-sm transition-colors">
                  Confirm
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Create Account Form */}
          {step === 2 && (
            <div className="max-w-4xl mx-auto">
              <div className="mb-6 bg-gray-50 p-4 border border-gray-200 rounded-sm">
                <p className="text-blue-600 font-medium mb-1">* All fields marked an asterisk(<span className="text-red-500">*</span>) should be completed.</p>
                <p className="text-blue-600 font-medium">* All fields should be written in English only.</p>
              </div>

              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                {/* Country */}
                <div className="flex flex-col md:flex-row md:items-center py-2">
                  <label className="md:w-1/3 font-medium text-gray-700 mb-2 md:mb-0">Country<span className="text-red-500">*</span></label>
                  <div className="md:w-1/2">
                    <select name="countryCode" value={formData.countryCode} onChange={handleChange} required className="w-full border border-gray-300 rounded-sm px-3 py-2 bg-white focus:outline-none focus:border-primary">
                      <option value="">Select Country</option>
                      {countries.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                    </select>
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col md:flex-row md:items-center py-2">
                  <label className="md:w-1/3 font-medium text-gray-700 mb-2 md:mb-0">E-mail<span className="text-red-500">*</span></label>
                  <div className="md:w-1/2">
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="User ID (E-mail)" className="w-full border border-gray-300 rounded-sm px-3 py-2 bg-white focus:outline-none focus:border-primary" />
                  </div>
                </div>

                {/* Password */}
                <div className="flex flex-col md:flex-row md:items-center py-2">
                  <label className="md:w-1/3 font-medium text-gray-700 mb-2 md:mb-0">Password<span className="text-red-500">*</span></label>
                  <div className="md:w-1/2">
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="Password" minLength={8} className="w-full border border-gray-300 rounded-sm px-3 py-2 bg-white focus:outline-none focus:border-primary" />
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col md:flex-row md:items-center py-2">
                  <label className="md:w-1/3 font-medium text-gray-700 mb-2 md:mb-0">Confirm Password<span className="text-red-500">*</span></label>
                  <div className="md:w-1/2">
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required placeholder="Confirm Password" minLength={8} className="w-full border border-gray-300 rounded-sm px-3 py-2 bg-white focus:outline-none focus:border-primary" />
                  </div>
                </div>

                {/* First Name */}
                <div className="flex flex-col md:flex-row md:items-center py-2">
                  <label className="md:w-1/3 font-medium text-gray-700 mb-2 md:mb-0">First Name<span className="text-red-500">*</span></label>
                  <div className="md:w-1/2">
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="First name" className="w-full border border-gray-300 rounded-sm px-3 py-2 bg-white focus:outline-none focus:border-primary" />
                  </div>
                </div>

                {/* Last Name */}
                <div className="flex flex-col md:flex-row md:items-center py-2">
                  <label className="md:w-1/3 font-medium text-gray-700 mb-2 md:mb-0">Last/Family Name<span className="text-red-500">*</span></label>
                  <div className="md:w-1/2">
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Last name" className="w-full border border-gray-300 rounded-sm px-3 py-2 bg-white focus:outline-none focus:border-primary" />
                  </div>
                </div>

                {/* 성명(국문) - only if country is KR */}
                {formData.countryCode === "kr" && (
                  <div className="flex flex-col md:flex-row md:items-center py-2">
                    <label className="md:w-1/3 font-medium text-gray-700 mb-2 md:mb-0">성명(국문)<span className="text-red-500">*</span></label>
                    <div className="md:w-1/2">
                      <input type="text" name="korName" value={formData.korName} onChange={handleChange} required placeholder="홍길동" className="w-full border border-gray-300 rounded-sm px-3 py-2 bg-white focus:outline-none focus:border-primary" />
                    </div>
                  </div>
                )}

                {/* Title */}
                <div className="flex flex-col md:flex-row md:items-center py-2">
                  <label className="md:w-1/3 font-medium text-gray-700 mb-2 md:mb-0">Title<span className="text-red-500">*</span></label>
                  <div className="md:w-2/3 flex flex-wrap gap-4 items-center">
                    {["Professor", "Dr.", "Mr.", "Ms."].map(t => (
                      <label key={t} className="flex items-center cursor-pointer">
                        <input type="radio" name="title" value={t} checked={formData.title === t} onChange={handleRadioChange} required className="mr-1" />
                        {t}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Degree */}
                <div className="flex flex-col md:flex-row md:items-start py-2">
                  <label className="md:w-1/3 font-medium text-gray-700 mt-2">Degree<span className="text-red-500">*</span></label>
                  <div className="md:w-2/3 flex flex-wrap gap-4 items-center mt-2">
                    {["M.D.", "Ph.D.", "M.D.,Ph.D.", "Other"].map(d => (
                      <label key={d} className="flex items-center cursor-pointer">
                        <input type="radio" name="degree" value={d} checked={formData.degree === d} onChange={handleRadioChange} required className="mr-1" />
                        {d}
                      </label>
                    ))}
                    {formData.degree === "Other" && (
                      <input type="text" name="degreeOther" value={formData.degreeOther} onChange={handleChange} required placeholder="Other degree" className="w-full md:w-auto mt-2 md:mt-0 border border-gray-300 rounded-sm px-3 py-1 bg-white focus:outline-none focus:border-primary" />
                    )}
                  </div>
                </div>

                {/* Category */}
                <div className="flex flex-col md:flex-row md:items-start py-2">
                  <label className="md:w-1/3 font-medium text-gray-700 mt-2">Category<span className="text-red-500">*</span></label>
                  <div className="md:w-2/3 flex flex-wrap gap-x-4 gap-y-2 mt-2">
                    {["Surgeon", "Physician", "Fellow", "Resident", "Student", "Nurses", "Nurse practitioners", "Physician's assistants", "Coordinators", "Technicians", "Scientist", "Industry", "Other"].map(c => (
                      <label key={c} className="flex items-center cursor-pointer">
                        <input type="radio" name="category" value={c} checked={formData.category === c} onChange={handleRadioChange} required className="mr-1" />
                        {c}
                      </label>
                    ))}
                    {formData.category === "Other" && (
                      <input type="text" name="categoryOther" value={formData.categoryOther} onChange={handleChange} required placeholder="Other category" className="w-full mt-2 border border-gray-300 rounded-sm px-3 py-1 bg-white focus:outline-none focus:border-primary" />
                    )}
                  </div>
                </div>

                {/* Company Name (If Industry) */}
                {formData.category === "Industry" && (
                  <div className="flex flex-col md:flex-row md:items-center py-2">
                    <label className="md:w-1/3 font-medium text-gray-700 mb-2 md:mb-0">Company Name<span className="text-red-500">*</span></label>
                    <div className="md:w-1/2">
                      <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required className="w-full border border-gray-300 rounded-sm px-3 py-2 bg-white focus:outline-none focus:border-primary" />
                    </div>
                  </div>
                )}

                {/* Affiliation (Unless Industry) */}
                {formData.category !== "Industry" && (
                  <div className="flex flex-col md:flex-row md:items-start py-2">
                    <label className="md:w-1/3 font-medium text-gray-700 mt-2">
                      Affiliation <span className="text-gray-500 font-normal">(소속)</span><span className="text-red-500">*</span>
                    </label>
                    <div className="md:w-2/3 space-y-2">
                      {formData.countryCode === "kr" && (
                        <select name="affiliationCode" value={formData.affiliationCode} onChange={(e) => {
                          handleChange(e);
                          const option = e.target.options[e.target.selectedIndex];
                          const engData = option.getAttribute("data-eng");
                          if(engData && e.target.value !== "999") {
                            setFormData(prev => ({ ...prev, affiliationEng: engData, affiliationCode: e.target.value }));
                          } else if (e.target.value === "999") {
                            setFormData(prev => ({ ...prev, affiliationEng: "", affiliationCode: e.target.value }));
                          }
                        }} className="w-full border border-gray-300 rounded-sm px-3 py-2 bg-white focus:outline-none focus:border-primary">
                          <option value="">Select Affiliation</option>
                          {affiliationsData.map((af: any) => (
                            <option key={af.value} value={af.value} data-eng={af.eng}>{af.kor}</option>
                          ))}
                        </select>
                      )}
                      <input 
                        type="text" 
                        name="affiliationEng" 
                        value={formData.affiliationEng} 
                        onChange={handleChange} 
                        required 
                        placeholder="Hospital, Institute, University" 
                        readOnly={formData.countryCode === "kr" && formData.affiliationCode !== "" && formData.affiliationCode !== "999"}
                        className={`w-full border border-gray-300 rounded-sm px-3 py-2 bg-white focus:outline-none focus:border-primary ${formData.countryCode === "kr" && formData.affiliationCode !== "" && formData.affiliationCode !== "999" ? "bg-gray-100 text-gray-500" : ""}`} 
                      />
                    </div>
                  </div>
                )}

                {/* Department */}
                {formData.category !== "Industry" && (
                  <div className="flex flex-col md:flex-row md:items-center py-2">
                    <label className="md:w-1/3 font-medium text-gray-700 mb-2 md:mb-0">Department<span className="text-red-500">*</span></label>
                    <div className="md:w-2/3">
                      <input type="text" name="departmentEng" value={formData.departmentEng} onChange={handleChange} required placeholder="Type in English (E.x. Surgery)" className="w-full border border-gray-300 rounded-sm px-3 py-2 bg-white focus:outline-none focus:border-primary" />
                    </div>
                  </div>
                )}

                {/* Mobile Phone */}
                <div className="flex flex-col md:flex-row md:items-center py-2">
                  <label className="md:w-1/3 font-medium text-gray-700 mb-2 md:mb-0">Mobile Phone<span className="text-red-500">*</span></label>
                  <div className="md:w-1/2">
                    <input type="text" name="mobilePhone" value={formData.mobilePhone} onChange={handleChange} required className="w-full border border-gray-300 rounded-sm px-3 py-2 bg-white focus:outline-none focus:border-primary" />
                  </div>
                </div>

                {/* Special Request for Food */}
                <div className="flex flex-col md:flex-row md:items-center py-2">
                  <label className="md:w-1/3 font-medium text-gray-700 mb-2 md:mb-0">Special Request for Food<span className="text-red-500">*</span></label>
                  <div className="md:w-2/3 flex flex-wrap gap-4 items-center">
                    {["None", "Vegetarian", "Other"].map(d => (
                      <label key={d} className="flex items-center cursor-pointer">
                        <input type="radio" name="dietary" value={d} checked={formData.dietary === d} onChange={handleRadioChange} required className="mr-1" />
                        {d}
                      </label>
                    ))}
                    {formData.dietary === "Other" && (
                      <input type="text" name="dietaryOther" value={formData.dietaryOther} onChange={handleChange} required placeholder="Other dietary request" className="w-full md:w-auto mt-2 md:mt-0 border border-gray-300 rounded-sm px-3 py-1 bg-white focus:outline-none focus:border-primary" />
                    )}
                  </div>
                </div>

                {/* Foreign Resident */}
                {formData.countryCode !== "kr" && formData.countryCode !== "" && (
                  <div className="flex flex-col md:flex-row md:items-center py-2">
                    <label className="md:w-1/3 font-medium text-gray-700 mb-2 md:mb-0">Are you a foreign resident in Korea?</label>
                    <div className="md:w-2/3 flex gap-4 items-center">
                      <label className="flex items-center cursor-pointer">
                        <input type="radio" name="residentKor" value="1" checked={formData.residentKor === "1"} onChange={handleRadioChange} className="mr-1" /> Yes
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="radio" name="residentKor" value="2" checked={formData.residentKor === "2"} onChange={handleRadioChange} className="mr-1" /> No
                      </label>
                    </div>
                  </div>
                )}

                {/* License (KR) */}
                {formData.countryCode === "kr" && (
                  <div className="flex flex-col md:flex-row md:items-center py-2">
                    <label className="md:w-1/3 font-medium text-gray-700 mb-2 md:mb-0">면허번호<span className="text-red-500">*</span></label>
                    <div className="md:w-2/3 flex flex-wrap gap-4 items-center">
                      <label className="flex items-center cursor-pointer">
                        <input type="radio" name="licenseGbn" value="1" checked={formData.licenseGbn === "1"} onChange={handleRadioChange} className="mr-1" /> 의사
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="radio" name="licenseGbn" value="2" checked={formData.licenseGbn === "2"} onChange={handleRadioChange} className="mr-1" /> 간호사
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="radio" name="licenseGbn" value="0" checked={formData.licenseGbn === "0"} onChange={handleRadioChange} className="mr-1" /> 면허번호없음
                      </label>
                      {(formData.licenseGbn === "1" || formData.licenseGbn === "2") && (
                        <input type="text" name="licenseNo" value={formData.licenseNo} onChange={handleChange} required placeholder="면허번호" className="w-full md:w-auto mt-2 md:mt-0 border border-gray-300 rounded-sm px-3 py-1 bg-white focus:outline-none focus:border-primary" />
                      )}
                    </div>
                  </div>
                )}

                <div className="text-center space-x-4 border-t border-gray-200 pt-8 mt-6">
                  <button type="button" onClick={() => setStep(1)} className="px-8 py-3 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-sm transition-colors text-lg">
                    Back
                  </button>
                  <button type="submit" disabled={loading} className="px-10 py-3 bg-primary hover:bg-red-800 text-white font-medium rounded-sm transition-colors text-lg disabled:opacity-70">
                    {loading ? "Processing..." : "Confirm"}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 3: Complete */}
          {step === 3 && (
            <div className="text-center py-10">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Registration Completed!</h3>
              <p className="text-gray-600 mb-8">Thank you for registering. You can now log in to your account.</p>
              <Link href="/login" className="px-8 py-3 bg-primary hover:bg-red-800 text-white font-medium rounded-sm transition-colors text-lg inline-block">
                Go to Login
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
