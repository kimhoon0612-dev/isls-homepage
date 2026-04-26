
import SubLayout from '@/components/SubLayout';

export default function Page() {
  const menuItems: { name: string; href: string }[] = [];

  return (
    <SubLayout title="Relevant Meetings" menuTitle="Relevant Meetings" menuItems={menuItems} currentPath="/relevant-meetings">
      <div className="prose max-w-none prose-lg text-gray-700" dangerouslySetInnerHTML={{ __html: `
					<section id="RelevantMeetings">
						<h3>Relevant Meetings</h3>

            <p><a href="https://www.ihpbacongress.org" target="_blank"><img src="https://www.isls-liversurgeon.org/images/2026/ihpba2026.jpg" class="img-responsive border"></a></p>
            <h2 class="text-center text-bold text-info"><em>17TH IHPBA World Congress 2026</em></h2>
            <table class="table table-bordered">
              <tbody><tr>
                <th class="bg-default text-center" width="20%">Title</th>
                <td width="80%">17TH IHPBA World Congress 2026</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Date</th>
                <td width="80%"><span class="text-danger text-bold">28-31 October 2026</span></td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Venue</th>
                <td width="80%">Suntec Singapore Convention &amp; Exhibition Centre, Singapore</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Host Organization</th>
                <td width="80%">International Hepato-Pancreato-Biliary Association(IHPBA)</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Important Dates</th>
                <td width="80%">
                  <span class="text-bold">Abstract submission deadline: 31 March 2026 (23:59hrs, GMT +12hrs)</span><br>
                  <span class="text-bold">Video upload deadline: 31 March 2026 (23:59hrs, GMT +12hrs)</span><br>
                  <span class="text-bold">Notification of acceptance: 17 June 2026</span><br>
                  <span class="text-bold">End of early registration: 8 July 2026</span><br>
                  <span class="text-bold">Date by which all presenting authors to be registered: 8 July 2026</span><br>
                </td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Website</th>
                <td width="80%"><a href="https://www.ihpbacongress.org" target="_blank">https://www.ihpbacongress.org</a></td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Contact Information</th>
                <td width="80%"><a href="mailto:info@ihpbacongress.org">info@ihpbacongress.org</a></td>
              </tr>

            </tbody></table>
            <p>&nbsp;</p>

            <p><a href="https://hbpsurgery.org" target="_blank"><img src="https://www.isls-liversurgeon.org/images/2025/hbp2026_new.jpg" class="img-responsive border"></a></p>
            <h2 class="text-center text-bold text-info"><em>HBP Surgery Week 2026 &amp; <br>The 64th Annual Congress of the Korean Association of HBP Surgery</em></h2>
            <h4 class="text-center text-bold text-danger">WE INVITE YOU TO HBP SURGERY WEEK 2026!</h4>
            <table class="table table-bordered">
              <tbody><tr>
                <th class="bg-default text-center" width="20%">Title</th>
                <td width="80%">HBP Surgery Week 2026 &amp; The 64th Annual Congress of the Korean Association of HBP Surgery</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Slogan</th>
                <td width="80%">Navigation to New Horizons in HBP Surgery</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Date</th>
                <td width="80%"><span class="text-danger text-bold">March 26 (Thu) - 28 (Sat), 2026</span></td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Venue</th>
                <td width="80%">Grand Hyatt Incheon</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Organizer</th>
                <td width="80%">The Korean Association of HBP Surgery</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Official Language</th>
                <td width="80%">English</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Website</th>
                <td width="80%"><a href="https://hbpsurgery.org" target="_blank">https://hbpsurgery.org</a></td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Programs</th>
                <td width="80%">
                  <span class="text-bold">Day 1 &amp; 2:</span> Scientific Programs<br>
                  <span class="text-bold">Day 3:</span> Surgical Skill Workshop (Hands-on)
                </td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Key Dates</th>
                <td width="80%">
                  <span class="text-danger text-bold">Extended Deadline for Abstract Submission: January 19, 2026</span><br>
                  <span class="text-danger text-bold">Pre-registration Deadline: March 6, 2026</span>
                </td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Secretariat</th>
                <td width="80%">
                  <span class="text-bold">HBP Surgery Week 2026 Secretariat</span><br>
                  Tel: +82-2-557-8422, 8423, Fax: +82-2-557-8428<br>
                  E-mail: <a href="mailto:hbps@hbpsurgery.org">hbps@hbpsurgery.org</a>
                </td>
              </tr>

            </tbody></table>
            <p>&nbsp;</p>

            <p><a href="https://www.atweek.org" target="_blank"><img src="https://www.isls-liversurgeon.org/images/2025/atw2025_new.jpg" class="img-responsive"></a></p>
            <h2 class="text-center text-bold text-info"><em>Asian Transplantation Week 2025</em></h2>
            <table class="table table-bordered">
              <tbody><tr>
                <th class="bg-default text-center" width="20%">Title</th>
                <td width="80%">Asian Transplantation Week 2025 (ATW 2025)</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Date</th>
                <td width="80%">November 20 (Thu) - 22 (Sat), 2025</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Venue</th>
                <td width="80%">Swiss Grand Hotel, Seoul, Korea</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Official Language</th>
                <td width="80%">English</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Website</th>
                <td width="80%"><a href="https://www.atweek.org" target="_blank">https://www.atweek.org</a></td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Hosted by</th>
                <td width="80%">The Korean Society for Transplantation (KST)</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Endorsed by</th>
                <td width="80%">The Transplantation Society (TTS)</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Important Dates</th>
                <td width="80%">
                  - Abstract Submission Deadline: August 24 (Sun), 2025<br>
                  - Deadline for Early Registration: October 19 (Sun), 2025<br>
                  - Deadline for Pre Registration: November 06 (Thu), 2025
                </td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Secretariat Contact Information</th>
                <td width="80%">
                  <span class="text-bold">ATW 2025 Secretariat</span><br>
                  InSession International Convention Services, Inc.<br>
                  4Fl., 10, Yeoksam-ro 7-gil, Gangnam-gu, Seoul 06244, Korea<br>
                  Tel: +82-70-4603-1252<br>
                  E-mail: <a href="mailto:atweek@insession.co.kr">atweek@insession.co.kr</a>
                </td>
              </tr>

            </tbody></table>
            <p>&nbsp;</p>
            <p><a href="https://hbpsurgery.org" target="_blank"><img src="https://www.isls-liversurgeon.org/images/2024/hbp2025.jpg" class="img-responsive"></a></p>
            <h2 class="text-center text-bold text-info"><em>HBP Surgery Week 2025 &amp; <br>The 62nd Annual Congress of the Korean Association of HBP Surgery</em></h2>
            <table class="table table-bordered">
              <tbody><tr>
                <th class="bg-default text-center" width="20%">Title</th>
                <td width="80%">HBP Surgery Week 2025 &amp; The 62nd Annual Congress of the Korean Association of HBP Surgery</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Date</th>
                <td width="80%">March 27 (Thu) - 29 (Sat), 2025</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Venue</th>
                <td width="80%">Gyeongju Hwabaek International Convention Center (HICO)</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Theme</th>
                <td width="80%">Harmony of Tradition and Innovation in HBP Surgery</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Website</th>
                <td width="80%"><a href="https://hbpsurgery.org" target="_blank">https://hbpsurgery.org</a></td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Official Language</th>
                <td width="80%">English</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Hosted by</th>
                <td width="80%">The Korean Association of Hepato-Biliary-Pancreatic Surgery</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Important Dates</th>
                <td width="80%">
                  - Abstract Submission Deadline: January 13 (Mon), 2025<br>
                  - Pre-registration Deadline: March 3 (Mon), 2025
                </td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Secretariat Contact Information</th>
                <td width="80%">
                  <span class="text-bold">HBP Surgery Week 2025 Secretariat</span><br>
                  InSession International Convention Services, Inc.<br>
                  4Fl., 10, Yeoksam-ro 7-gil, Gangnam-gu, Seoul 06244, Korea<br>
                  Tel: +82-2-6207-8182<br>
                  E-mail: <a href="mailto:hbps@hbpsurgery.org">hbps@hbpsurgery.org</a>
                </td>
              </tr>

            </tbody></table>
            <p>&nbsp;</p>
            <p><a href="https://ills2025.com/" target="_blank"><img src="https://www.isls-liversurgeon.org/images/2025/ills2025.jpg" class="img-responsive"></a></p>
            <h2 class="text-center text-bold text-info"><em>5th World Congress of the International Laparoscopic Liver Society<br> &amp; The 3rd International Consensus Conference on Minimally Invasive Liver Resections</em></h2>
            <table class="table table-bordered">
              <tbody><tr>
                <th class="bg-default text-center" width="20%">Title</th>
                <td width="80%">5th World Congress of the International Laparoscopic Liver Society<br>
                  &amp; The 3rd International Consensus Conference on Minimally Invasive Liver Resections
                </td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Date</th>
                <td width="80%">June 24(Tue) - 27(Fri), 2025</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Venue</th>
                <td width="80%">COEX, Seoul, Korea/td&gt;
              </td></tr>
              <tr>
                <th class="bg-default text-center" width="20%">Official Language</th>
                <td width="80%">English</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Hosted by</th>
                <td width="80%">The International Laparoscopic Liver Society (ILLS)</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Organized by</th>
                <td width="80%">
                  ILLS 2025 Organizing Committee<br>
                  The Korean Association of Hepato-Biliary-Pancreatic Surgery (KAHBPS)
                </td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Website</th>
                <td width="80%"><a href="https://ills2025.com/" target="_blank">https://ills2025.com/</a>
                </td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">ILLS 2025 Secretariat</th>
                <td width="80%">
                  3F, MS B/D 12, Eonju-ro 79-gil, Gangnam-gu, Seoul, 06222, Korea<br>
                  Tel: +82-2-557-8422, 8423<br>
                  E-mail: <a href="mailto:info@ills2025.com">info@ills2025.com</a>
                </td>
              </tr>
            </tbody></table>
            <p>&nbsp;</p>


            <p><a href="https://eds2025.com" target="_blank"><img src="https://www.isls-liversurgeon.org/images/2025/EDS.jpg" class="img-responsive"></a></p>
            <h2 class="text-center text-bold text-info"><em>The 17th European Digestive Surgery (EDS) Postgraduate Course</em></h2>
            <table class="table table-bordered">
              <tbody><tr>
                <th class="bg-default text-center" width="20%">Title</th>
                <td width="80%">The 17th European Digestive Surgery (EDS) Postgraduate Course</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Date</th>
                <td width="80%">April 10(Thu) - 12(Sat), 2025</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Venue</th>
                <td width="80%">Acibadem University, Istanbul Türkiye/td&gt;
              </td></tr>
              <tr>
                <th class="bg-default text-center" width="20%">Host Organization</th>
                <td width="80%">European Digestive Surgery (EDS)</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Website</th>
                <td width="80%"><a href="https://eds2025.com/" target="_blank">https://eds2025.com/</a>
                </td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">ILLS 2025 Secretariat</th>
                <td width="80%">
                  3F, MS B/D 12, Eonju-ro 79-gil, Gangnam-gu, Seoul, 06222, Korea<br>
                  Tel: +82-2-557-8422, 8423<br>
                  E-mail: <a href="mailto:info@ills2025.com">info@ills2025.com</a>
                </td>
              </tr>
            </tbody></table>
            <p>&nbsp;</p>

            <p><a href="https://amhpb.org.mx" target="_blank"><img src="https://www.isls-liversurgeon.org/images/2024/amhpb.jpg" class="img-responsive"></a></p>
            <h2 class="text-center text-bold text-info"><em>12<sup>th</sup> Annual Congress of the Hepato Pancreato Biliary Association</em></h2>
            <table class="table table-bordered">
              <tbody><tr>
                <th class="bg-default text-center" width="20%">Title</th>
                <td width="80%">12<sup>th</sup> Annual Congress of the Hepato Pancreato Biliary Association</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Date</th>
                <td width="80%">December 4 (Wed)- 6 (Sat), 2024</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Venue</th>
                <td width="80%">Marquis Reforma Hotel &amp; Spa - Mexico City</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Endorsed by</th>
                <td width="80%">International Society of Liver Surgeons(ISLS)</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">International Professors</th>
                <td width="80%">
                  <p>                  
                  Bernardo Franssen Canovas MD<br>
                  Roper St. Francis Heatlhcare, USA
                  </p>
                  <p>
                  Daniel Borja Cacho MD<br>
                  Northwestern University Feinberg School of Medicine
                  </p>
                  <p>
                  Daniel Zamora Valdés MD<br>
                  KASCH, KAMC, MNGHA, KSA
                  </p>
                  <p>
                  Karen Pineda Solís MD<br>
                  University of Rochester Medical Center, USA
                  </p>
                  <p>
                  Maria B. Majella Doyle MD<br>
                  Washington University In St. Louis / School of Medicine, USA
                  </p>
                  <p>
                  Mariana Chávez Villa MD<br>
                  Mayo Clinic, USA
                  </p>
                  <p>
                  Myron E. Schwartz MD<br>
                  Mount Sinai, USA.
                  </p>
                  <p>
                  Parissa Tabrizian MD<br>
                  Mount Sinai, USA
                  </p>
                  <p>
                  Sean P. Cleary MD<br>
                  University of Toronto, CAN
                  </p>
                  <p>
                  Susanne G. Warner MD<br>
                  Mayo Clinic, USA
                  </p>
                  <p>
                  Varvara A. Kirchner MD<br>
                  Stanford Medicine Health Care, USA
                  </p>
                </td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Host</th>
                <td width="80%">Mexican Chapter of the AHPBA and IHPBA</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Website</th>
                <td width="80%"><a href="https://amhpb.org.mx" target="_blank">https://amhpb.org.mx</a></td>
              </tr>

            </tbody></table>
            <p>&nbsp;</p>

            <p><a href="https://2024.dle-eg.org" target="_blank"><img src="https://www.isls-liversurgeon.org/images/2024/dle2024_0923.jpg" class="img-responsive"></a></p>
            <h2 class="text-center text-bold text-info"><em>Donate Life Egypt 2024</em></h2>
            <table class="table table-bordered">
              <tbody><tr>
                <th class="bg-default text-center" width="20%">Title</th>
                <td width="80%">Donate Life Egypt 2024</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Date</th>
                <td width="80%">October 6 (Thu) - 8 (Sat), 2024</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Venue</th>
                <td width="80%">Intercontinental Cairo Semiramis Hotel, Cairo, Egypt</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Endorsed by</th>
                <td width="80%">International Society of Liver Surgeons(ISLS)</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Congress President</th>
                <td width="80%">
                  <b>Ahmed Elsabbagh, MD, MS, MRCS, PhD</b><br>
                    Associate Professor, Transplant and Hepatopancreatobiliary Surgeon,<br>
                    Gastroenterology Surgery and Transplantation Center, Mansoura University, Egypt<br>
                    President of Donate Life Egypt (DLE)<br>
                    Member at Large, International Society of Liver Surgeons (ISLS)
                </td>
              </tr>
            </tbody></table>
            <p>&nbsp;</p>

            <p><a href="https://www.atweek.org" target="_blank"><img src="https://www.isls-liversurgeon.org/images/2024/atw2024.jpg" class="img-responsive"></a></p>
            <h2 class="text-center text-bold text-info"><em>Asian Transplantation Week 2024</em></h2>
            <table class="table table-bordered">
              <tbody><tr>
                <th class="bg-default text-center" width="20%">Title</th>
                <td width="80%">Asian Transplantation Week 2024 (ATW 2024)</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Date</th>
                <td width="80%">November 14 (Thu) - 16 (Sat), 2024</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Venue</th>
                <td width="80%">Conrad Seoul, Seoul, Korea</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Official Language</th>
                <td width="80%">English</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Hosted by</th>
                <td width="80%">The Korean Society for Transplantation (KST)</td>
              </tr>  
              <tr>
                <th class="bg-default text-center" width="20%">Endorsed by</th>
                <td width="80%">The Transplantation Society (TTS)</td>
              </tr>
              <tr>
                <th class="bg-default text-center" width="20%">Secretariat Contact Information</th>
                <td width="80%">
                  ATW 2024 Secretariat<br>
                  InSession International Convention Services, Inc.<br>
                  4Fl., 10, Yeoksam-ro 7-gil, Gangnam-gu, Seoul 06244, Korea<br>
                  Tel: +82-2-6207-8183<br>
                  E-mail: <a href="mailto:atweek@insession.co.kr">atweek@insession.co.kr</a>
                </td>
              </tr>
            </tbody></table>
            <p>&nbsp;</p>

						<!--div class="row">
							<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
								<div class="card">
									<div class="image">
										<img src="https://www.isls-liversurgeon.org/images/banner_HBP2024.jpg" class="img-responsive">
										<div class='time'>
											<div class='date'>05</div>
											<div class='month'>MAY</div>
											<div class='year'>2021</div>
										</div>
									</div>
									<div class="card-body">
										<h4 class="text-bold"><span class="text-success">HBP</span> Surgery Week 2024</h4>
										<h4><span class="text-success text-bold">March 3-5, 2022</span></h4>
                    <h4><span class="text-bold">Conrad Seoul, Korea</span></h4>
										<hr>
										<p class="text-center"><a href="http://www.khbps.org" target="_blank" role="button" class="btn btn-warning"><i class="fa fa-home"></i> Visit Website</a></p>
									</div>
								</div>
							</div>
						</div-->
						<p style="min-height:200px;">&nbsp;</p>
					</section><!--Welcome message-->
				` }} />
    </SubLayout>
  );
}
