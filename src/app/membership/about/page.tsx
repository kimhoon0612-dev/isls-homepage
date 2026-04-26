
import SubLayout from '@/components/SubLayout';

export default function Page() {
  const menuItems = [
    { name: "About ISLS Membership", href: "/membership/about" },
    { name: "Join or Renew", href: "/membership/join" },
    { name: "My ISLS Membership", href: "/membership/mypage" },
    { name: "VOD / E-Learning", href: "/membership/vod" },
    { name: "ISLS Members list", href: "/membership/members" },
    { name: "By-laws", href: "/membership/bylaws" },
    { name: "Journal", href: "/membership/journal" },
  ];

  return (
    <SubLayout title="About ISLS Membership" menuTitle="Membership" menuItems={menuItems} currentPath="/membership/about">
      <div className="prose max-w-none prose-lg text-gray-700" dangerouslySetInnerHTML={{ __html: `
						<div class="section">
							<h3>About ISLS Membership</h3>
							<h4 class="text-bold text-info">Standard Membership </h4>
							<p>
								Standard Membership is reserved for surgeons, physicians, scientists or anyone who has completed a doctoral level training program or the equivalent. Benefits of Regular Membership include (1) discount on the registration fees for all activities of the “ISLS”; (2) access to web-based contents including member directory and lectures from past meetings (including VODs); and (3) eligibility to be invited as Faculty to all “ISLS” events.
							</p>
							<p>&nbsp;</p>

							<h4 class="text-bold text-info">Junior Membership </h4>
							<p>
								In an effort to make membership more affordable for young doctors and residents, the “ISLS” offers Junior Membership for applicants who are under the age of 40. Benefits of Junior Membership include (1) discount on the registration fees for all activities of the “ISLS” and (2) access to web-based contents including member directory and lectures from past meetings (including VODs).
							</p>
							<p>&nbsp;</p>

							<h4 class="text-bold text-info">Associate Membership (Allied Health Member)</h4>
							<p>
								Associate Members shall be nurses, nurse practitioners, physician’s assistants, coordinators, and technicians in liver and pancreas surgery or who are actively engaged in the science or clinical practice of liver and pancreas surgery. Benefits of Associate Membership include (1) discount on the registration fees for all activities of the “ISLS” and (2) access to web-based contents including member directory and lectures from past meetings (including VODs).
							</p>
							<p>&nbsp;</p>

							<h4 class="text-bold text-info">Honorary Membership</h4>
							<p>
							 Honorary Members shall be persons who, regardless of where they are practicing in the world, have made outstanding contributions to liver and pancreas surgery and related fields and accumulated remarkable achievements in this medical science. Honorary Members shall be elected by the Council upon application, and shall be excluded from payment of all dues. Further, they will be invited as potential guest speakers at any international meetings.
							</p>
							<p>&nbsp;</p>

							<h4 class="text-bold text-info">Corporate Membership</h4>
							<p>
							 Corporate members shall pay a yearly fee to be decided upon by the Council.
							</p>
							<p>&nbsp;</p>

							<h4 class="text-bold text-info">Membership Benefits</h4>
							<ul class="d" style="margin-left:-20px;">
								<li style="margin:5px 0px;">Being part of a professional liver and pancreas surgeons network</li>
								<li style="margin:5px 0px;">Discounts on the ISLS biennial congress and other meetings</li>
								<li style="margin:5px 0px;">Access to lecture VODs (ISLS congress and online webinars)</li>
								<li style="margin:5px 0px;">Eligibility to join the ISLS Study Group</li>
                <li style="margin:5px 0px;">Eligibility to apply for the ISLS Paolo Muiesan Fellowship Program</li>
                <!--li><span style="font-size:19px;font-weight:bold;">Active members are eligible for <span class="text-danger">an early-bird registration discount-from \$950 to \$700-for ISLS 2025 Toronto</span>.<br>Don't miss out on this <span class="text-danger">over 26% savings</span> compared to non-member rates!</span></li-->
              </ul>
							<p>&nbsp;</p>

							<h4 class="text-bold text-info">Membership Fee</h4>
							<table class="table table-bordered text-center">
								<colgroup>
									<col width="50%">
									<col width="50%">
								</colgroup>
								<tbody>
									<tr class="bg-info text-bold">
										<td>Membership Category</td>
										<td>Annual Membership Fee</td>
									</tr>
									<tr>
										<td class="text-center bg-default text-bold">Standard</td>
										<td>USD 100</td>
									</tr>
									<tr>
										<td class="text-center bg-default text-bold">Junior</td>
										<td>USD 60</td>
									</tr>
									<tr>
										<td class="text-center bg-default text-bold">Associate (Allied Health Member)</td>
										<td>USD 60</td>
									</tr>
								</tbody>
							</table>

							<ol class="none" style="margin-left:-40px;">
								<li class="text-danger">※ Active Members will be required to pay an annual subscription to maintain their membership and support the activities of the Society. </li>
								<li class="text-danger">※ The membership year runs from <span class="text-bold">January 1 to December 31</span> regardless of the date of application to become a member. </li>
								<li class="text-danger">※ For corporate membership, please inquire the office directly (<a href="mailto:isls-liversurgeon@insession.co.kr" style="text-decoration:none;">isls-liversurgeon@insession.co.kr</a>) </li>
							</ol>
							<p>&nbsp;</p>
							<div style="text-align:center;padding:20px;">
								<a href="/02_membership/s22.html#Join" role="button" class="btn btn-success btn-lg">Join or Renew Membership</a>
							</div>


							<!-- step contents -->
						</div>
					` }} />
    </SubLayout>
  );
}
