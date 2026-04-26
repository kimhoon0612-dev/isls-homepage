
import SubLayout from '@/components/SubLayout';

export default function Page() {
  const menuItems = [
    { name: "ISLS Congress", href: "/events/congress" },
    { name: "Single Topic Symposia", href: "/events/symposia" },
    { name: "ISLS Webinars", href: "/events/webinars" },
  ];

  return (
    <SubLayout title="ISLS Webinars" menuTitle="Events" menuItems={menuItems} currentPath="/events/webinars">
      <div className="prose max-w-none prose-lg text-gray-700" dangerouslySetInnerHTML={{ __html: `
					<section id="Webinar">
						<h3>ISLS Webinars</h3>
            <div class="row inner-bottom-xs">
              <div class="col-md-11 mt-20">
                <p>The ISLS Council extend sincere appreciation to all participants for making your time to join us at ISLS Surgical Techniques in Advanced Liver Surgery and Transplantation Webinar Series.</p>
              </div>
              <div class="col-md-12 mt-20">
                  <img src="https://www.isls-liversurgeon.org/images/pop_0422.jpg" class="img-responsive img-thumbnail">
              </div>
            </div>
            <h4 class="text-bold">This Event is endorsed by the ILTS</h4>
            <p class="inner-bottom-xs"><a href="https://www.ilts.org" target="_blank"><img src="https://www.isls-liversurgeon.org/images/ilts_banner.jpg"></a></p>
            <div class="table-responsive">
              <table class="table table-bordered">
                <colgroup>
                  <col width="20%">
                  <col width="30%">
                  <col width="20%">
                  <col width="30%">
                </colgroup>
                <tbody><tr class="bg-default text-bold">
                  <th class="text-center">Webinar Series</th>
                  <th class="text-center">Theme</th>
                  <th class="text-center">Date</th>
                  <th class="text-center">Registrants</th>
                </tr>
                <tr>
                  <td>ISLS First Webinar</td>
                  <td>Laparoscopic &amp; Robotic Donor Hepatectomy</td>
                  <td>November 20 (Fri), 2020</td>
                  <td>407 registrants from 76 countries</td>
                </tr>
                <tr>
                  <td>ISLS Second Webinar</td>
                  <td>Alpps Procedure Technical Evolution and Outcomes</td>
                  <td>December 18 (Fri), 2020</td>
                  <td>296 registrants from 61 countries</td>
                </tr>
                <tr>
                  <td>ISLS Third Webinar</td>
                  <td>Surgical Treatment of Hepatocellular Carcinoma</td>
                  <td>February 26 (Fri), 2021</td>
                  <td>552 participants from 72 countries</td>
                </tr>
                <tr class="bg-warning text-bold">
                  <td>ISLS Fourth Webinar</td>
                  <td>From Apolt to Rapid Procedure: Technical Evolution and The Premise</td>
                  <td>April 16 (Fri), 2021</td>
                  <td>413 participants from 70 countries</td>
                </tr>
              </tbody></table>
            </div>
            <p>&nbsp;</p>
            <div class="alert">
              <div class="media">
                <div class="media-left">
                  <img src="https://www.isls-liversurgeon.org/images/video-camera.jpg" class="media-object" style="width:150px">
                </div>
                <div class="media-body">
                  <h4><span class="text-bold text-info">Webinar Lecture Recordings</span></h4>
                  <p>Recording of lectures presented during the ISLS webinar series are available on ISLS Video on Demand (VOD) service page to support the continuing education of the ISLS members. VOD page is accessible to ISLS members only.</p>
                  <h4><i>Become a valuable member of the ISLS now!</i></h4>
                  <a href="/membership/vod" class="btn btn-warning mt-10">Go to VOD page</a>
                  <a href="/membership/join" class="btn btn-primary mt-10">Join membership</a>
                </div>
              </div>
            </div>
            <div>
              <ul class="d" style="font-size:16px;margin-left:-20px;line-height:160%;margin-top:30px;">
                <li><a href="#" data-toggle="modal" data-image="/images/webinar/ISLS_1st_Webinar.jpg" data-target="#popupModal">ISLS First Webinar "Laparoscopic &amp; Robotic Donor Hepatectomy" Program</a></li>
                <li><a href="#" data-toggle="modal" data-image="/images/webinar/ISLS_2nd_Webinar.jpg" data-target="#popupModal">ISLS Second Webinar "Alpps Procedure Technical Evolution and Outcomes" Program</a></li>
                <li><a href="#" data-toggle="modal" data-image="/images/webinar/ISLS_3rd_Webinar.jpg" data-target="#popupModal">ISLS Third Webinar "Surgical Treatment of Hepatocellular Carcinoma" Program</a></li>
                <li><a href="#" data-toggle="modal" data-image="/images/webinar/ISLS_4th_Webinar.jpg" data-target="#popupModal">ISLS Fourth Webinar "From Apolt to Rapid Procedure: Technical Evolution and The Premise" Program</a></li>
              </ul>
            </div>
					</section>

          <!-- Popup -->
          <div aria-hidden="true" aria-labelledby="popupModal" role="dialog" tabindex="-1" id="popupModal" class="modal fade">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-body">
                        <img src="" class="img-responsive">
                      </div>
                      <div class="modal-footer">
                        <button data-dismiss="modal" class="btn btn-default btn-sm" id="popupClose" type="button">Close</button>
                      </div>
                  </div>
              </div>
          </div>
          <!-- modal -->
      ` }} />
    </SubLayout>
  );
}
