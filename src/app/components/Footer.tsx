import { Facebook, FilmIcon, Instagram, Mail, Phone, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <div className=" max-w-[1440px] mx-auto flex justify-between py-[20px] px-5 bg-indigo-700 text-white pt-[25px]">
      <div className="font-[400] text-[12   px] p-2">
        <div className="flex gap-[5px]">
          <FilmIcon className="mb-[13px]" /> <span>Movie Z</span>
        </div>
        <p>© 2024 Movie Z. All Rights Reserved.</p>
      </div>
      <div className="flex gap-[20px]">
        <div className="font-[400] text-[12px]">
          <p>Contact Information</p>
          <div className="flex gap-[10px] py-[12px] items-center">
            <Mail className="" />
            <div>
              <p className="font-[500]">
                <b>Email:</b>
              </p>
              <p>support@movieZ.com</p>
            </div>
          </div>
          <div className="flex gap-[10px] py-[12px] items-center">
            <Phone className="" />
            <div>
              <p className="font-[500]">
                <b>Phone:</b>
              </p>
              <p>+976 (11) 123-4567</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col pl-[20px] text-[12px] font-[500] gap-[12px] xl:flex xl:flex-col">
          <p>Follow us</p>
          <div className="xl:flex xl:gap-3">
            <div className="flex ">
              <Facebook/>
          <p className="text-[16px]">Facebook</p>
          </div>
          <div className="flex">
            <Instagram/>
          <p className="text-[16px]">Instagram</p>
          </div>
          <div className="flex">
            <Twitter/>
          <p className="text-[16px]">Twitter</p>
          </div>
          <div className="flex">
            <Youtube/>
          <p className="text-[16px]">Youtube</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};