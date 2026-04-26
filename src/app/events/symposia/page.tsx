
import SubLayout from '@/components/SubLayout';

export default function Page() {
  const menuItems = [
    { name: "ISLS Congress", href: "/events/congress" },
    { name: "Single Topic Symposia", href: "/events/symposia" },
    { name: "ISLS Webinars", href: "/events/webinars" },
  ];

  return (
    <SubLayout title="Single Topic Symposia" menuTitle="Events" menuItems={menuItems} currentPath="/events/symposia">
      <div className="prose max-w-none prose-lg text-gray-700" dangerouslySetInnerHTML={{ __html: `
					<section id="SingleTopic">
						<h3>Single Topic Symposia</h3>
						<h4 class="text-bold text-danger" style="font-size:20pt;margin:20px 0px;"><i>2024</i></h4>
						<div class="row">
							<div class="col-lg-5 col-md-5 col-sm-12">
								<img src="https://www.isls-liversurgeon.org/images/2023/isls2024_new.jpg" class="img-responsive img-thumbnail">
							</div>
							<div class="col-lg-7 col-md-7 col-sm-12">
								<h4 class="text-bold text-warning pastBox">ISLS Single Topic Symposium<br>(ISLS STS 2024 Seoul)</h4>
								<h5>March 18(Mon) - 19(Tue), 2024  │ Seoul, Korea</h5>
								<p style="padding-top:15px;">
									</p><div class="input-group-btn">
										<a href="/download/ISLS STS 2024_Program at a glance.pdf" target="_blank" role="button" class="btn btn-default" style="margin-right:5px;"><i class="fa fa-file-text-o"></i> Program</a>
  									<a href="https://sites.google.com/view/isls-sts-2024photo-gallery?usp=sharing" target="_blank" role="button" class="btn btn-default"><i class="fa fa-camera"></i> Photo Gallery</a>
									</div>
								<p></p>
							</div>
						</div>
						<hr>
						<h4 class="text-bold text-danger" style="font-size:20pt;margin:20px 0px;"><i>2022</i></h4>
						<div class="row" style="margin-bottom:20px;">
							<div class="col-lg-5 col-md-5 col-sm-12">
								<img src="https://www.isls-liversurgeon.org/images/2023/past_isls_Istanbul.jpg" class="img-responsive img-thumbnail">
							</div>
							<div class="col-lg-7 col-md-7 col-sm-12">
								<h4 class="text-bold text-warning pastBox">ISLS Istanbul Single Topic Symposium</h4>
								<h5>December 3, 2022  │ Bahcesehir University, Istanbul, Turkiye</h5>
								<p style="padding-top:15px;">
									</p><div class="input-group-btn">
										<a href="https://isls2022istanbul.com" target="_blank" role="button" class="btn btn-default" style="margin-right:5px;"><i class="fa fa-home"></i> Website</a>
									</div>
								<p></p>
							</div>
						</div>
            <div class="row">
              <div class="col-md-4"><img src="https://www.isls-liversurgeon.org/images/2023/st01.jpg" class="img-responsive"></div>
              <div class="col-md-4"><img src="https://www.isls-liversurgeon.org/images/2023/st02.jpg" class="img-responsive"></div>
              <div class="col-md-4"><img src="https://www.isls-liversurgeon.org/images/2023/st03.jpg" class="img-responsive"></div>
            </div>
						<hr>
						<div class="row">
							<div class="col-lg-5 col-md-5 col-sm-12">
								<img src="https://www.isls-liversurgeon.org/images/past_amc2022.jpg" class="img-responsive img-thumbnail">
							</div>
							<div class="col-lg-7 col-md-7 col-sm-12">
								<h4 class="text-bold text-warning pastBox">International Liver Symposium of ISLS in collaboration with Asan Liver Center</h4>
								<h5>March 11 (Fri) – 12 (Sat), 2022 │ 6F, East Building, Asan Medical Center</h5>
								<p style="padding-top:15px;">
									</p><div class="input-group-btn">
										<a href="/download/International Liver Symposium of ISLS.pdf" target="_blank" role="button" class="btn btn-default" style="margin-right:5px;"><i class="fa fa-file-text-o"></i> Program</a>
  									<a href="https://sites.google.com/view/isls-asan-photo-gallery" target="_blank" role="button" class="btn btn-default"><i class="fa fa-camera"></i> Photo Gallery</a>
									</div>
								<p></p>
							</div>
						</div>
					</section>

				` }} />
    </SubLayout>
  );
}
