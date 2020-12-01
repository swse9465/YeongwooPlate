import React from "react";
import styled from "styled-components";
import { List } from "antd";
import { Link } from "react-router-dom";
import { Cookies } from "react-cookie";

const CustomText = styled.p`
  font-size: 25px;
  padding-bottom: 7px;
`;
const ELink = styled(Link)`
  color: inherit;
  margin-bottom: 3px;
  &:hover {
    color: ${(props) => props.theme.orangeColor};
  }
`;
const SubText = styled.p`
  font-size: 15px;
  color: ${(props) => props.theme.darkGreyColor};
`;
const img_url= [
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MjZfNTQg%2FMDAxNTk4NDA4NDc5ODM3.AOCpmWsz7Mmf1xw89U3CLw_yHPOKJJFyHlllXp27-PIg.tsAsYfHVz9gAaxIASUqJvhjWMUXfNl7dhh09vXw73MYg.JPEG.qkrguswn017%2FIMG_8693.jpg",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MTJfMTQw%2FMDAxNTk5ODg1OTU1Mjg2.D12sgIT2eV_pFWeVs3GO6hiV3x24h6fR4BQiOaru2ekg.MfPzx_XaXrSCsiKLjQE1bupIbCRsV7GHuOi0ftMeaoMg.JPEG.heysoovely%2F1599885954621.jpg",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MjBfOTIg%2FMDAxNTk3OTMzOTU1MDQ1.HElym3nYBLewQq-pj0KLXomgewZwWC0Awf3A9tF7zw0g.66xTHyDj8BWkGeFfy3dQtV3IWvK53ug6N4P61l_A3qUg.JPEG.icdi1116%2F20191006_165556.jpg",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MDhfMTY2%2FMDAxNTk0MjE5NTQwNDkz.0hV1xc2jldllAkM24wJUnEWurhCXKpaYfBvOtxd-4Y4g.HeOmSvN38HSGhGY_i5Ak5EsfZ1Clhstkxut1JEkPiY4g.JPEG.zzzwldnjs%2FIMG_3245.jpg",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MDJfMTI4%2FMDAxNTk2MzM4NDUwNzMz.jTJiKymSNvZykqIaMXxyelzUgBbRRUDrxTXwSJKM_fIg.ooEzSDcYDfQIOG3js2CkpE7UFTKOgCxFGnfoGxjVe8Ug.JPEG.gpdnjsdldi%2FIMG_3463.jpg",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160309_175%2Fdaepolong_1457497729886dWmE1_JPEG%2F12393715_461704157351578_1174314388_n.jpg&type=sc960_832",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA5MjhfMjE2%2FMDAxNTM4MTA3NzY2OTUy.4wlx2oW3JabZon2x3uulzsWCButvGYTj26uO1tqhRA0g.C8zamoM7Jv7SiJ3_L5R25727q75yZXwS3AKUFi38up8g.JPEG.my_myung%2FELOE9233.JPG&type=sc960_832",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MjZfMjUy%2FMDAxNjAxMTI4MzQ4NjAy.lMsNevp_-HWUOHyDPy2hUqGJpHRiguKTj5TvCN6URFgg.suwEY6-Y51qXUbXZKgk0-yzyjkF7IbzXPMzZqVtWBskg.JPEG.tjdal4666%2FIMG_3861.jpg",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA1MDVfMjE0%2FMDAxNTg4NjgzODM0NzAx.qR7V_DOtZzKWaK5Ae6tyO8nzExjMHXBscEncIXXr9Iog.vi5Rw_vh1s9fowb5SV3_egZDARkcp-FZGebyOP83A3gg.JPEG.by2bin%2FIMG_0624.JPG",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MjVfMTM1%2FMDAxNTk1NjY3NTg5ODI3.KmPU4lRJHZiY_sWIJl5l6HDdGcIo6TQwITvQQ0nCPqkg.8t53wvlWCDKorWIT98depNsBizSecUE0ZOcT01EFb8Ig.JPEG.honyo%2F012.jpg",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MTNfNDAg%2FMDAxNTk0NjI1Nzk0Mjcw.ibXwq6KvL0jKR4EHfJrKC3fRb8gUcPRyeHT-tltVjDEg.J0w1Pf3gssLedUhRrSIy7o1TGWfrQdEsohOjJz6jHPwg.JPEG.awhawhawh%2FKakaoTalk_20200713_144802741_08.jpg",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA1MTlfMTE0%2FMDAxNTg5ODU0MjYwNDEw.fO2TnybIDXVtDhyexuYnGssS4VjXTBGqldHlisVMp40g.KK3N0IaOmAPOurrI5cAVEI1xcp-ZMOHim_dai-x7PaEg.JPEG.wishmeluck13%2F%25C4%25B8%25C3%25B315.JPG",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MjJfMzYg%2FMDAxNjAwNzQwMTYxOTk0.5GnE1d-bgTK_OApOGOq5PMXL8DT9bPZQm2aJ4eJpT6Eg.vaVvrEdYUegTHsjf_blAezxLyx7Gwf131ZrYmrFz6Q8g.JPEG.lejh0512%2F1600740162305.jpg",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MDRfODYg%2FMDAxNTk2NTEyMTUzMzM5.LeytV2xJaEHh8Drj4n6OIZ5jrFUla1l_J46rWD2sQSog.u6BW41xTXKmkZ5himO7rO3_0KRA6CSqSZuWxZ8sH0LIg.JPEG.seultudio_%2FIMG_5173.jpg",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MDVfMTU0%2FMDAxNTkzOTYwNDg2ODcz.P6CZfxJVScaEybRwnJ9QJ0cvO5O3vKYqxS18Pw1g1Esg.jxtBXRZSuvzOe97G0RdCx_9gy26-N5czAcpEp99H0Hsg.JPEG.gome1116%2F1593960486900.jpg",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MTJfMjU3%2FMDAxNTk0NTU3NDAwMzU0.bvPgVTDTW6FdRJGvzDypTNHHLr-_n_jviWBvSTS5Wk4g.dN8Ljfmu607IDqY5syyeujiWRZeByiX_o8BgZkSzcpsg.JPEG.tkael5959%2FIMG_9135.jpg",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MTBfMjcx%2FMDAxNTk0MzkyOTQ3MTM5.jC43gtdZkKC6U1oJeRP0wy99bKrsbk3vIJOLPEN9Gxgg.6TJy5T61PlGlM8QYRnhu1iBy_qhwRZ9UO6clQWN8w_Ig.JPEG.chiaki25%2FIMG_6929.jpg",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20151001_45%2Ftiamo2u_14436876438637mp8E_JPEG%2FP20150714_151703796_7B4F9ADF-7DE8-4DDE-B83E-2BF40EE0ECB1.JPG&type=sc960_832",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MjBfMTMz%2FMDAxNTk1MTc4MTE3MjY5.29HSuUUs5YRFbk-H5drIcGRUfY2ZIXin3GMGaaQEcUsg.0M-pLKT9EIkMml9VpSQdTh0U0W6LrU276cpF1Wtcsosg.JPEG.casey0226%2FIMG_6904.jpg",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MTdfMjgw%2FMDAxNTk0OTUxNTI2OTAw.kCSA6tjJTNiuozQpLfv-ZTVXy_OjiIOMr9FJ9stgeaAg.VpcWI2xnCUUoI12P_4A-evsmpmHmNzHQSDoVXDP1btQg.JPEG.oioap123%2FKakaoTalk_20200717_102840750_02.jpg",

];
const StoresList = (props) => {

  return (
    <List
      grid={{ gutter: 16, column: 2 }}
      dataSource={props.stores}
      renderItem={(item, index) => (
        <List.Item>
          <img
            src={img_url[index%20]}
            width="80%"
            height="auto"
          />
          <ELink
            to={`/detailStore/${item.id}`}
            onClick={() => {
              const cookies = new Cookies();
              let preCookies = cookies.get("store");
              let newCookies;
              if (preCookies) {
                newCookies = new Array(preCookies.length + 1);
                for (let i = 0; i < preCookies.length; i++) {
                  newCookies[i + 1] = preCookies[i];
                }
              } else {
                newCookies = new Array(1);
              }
              newCookies[0] = {
                no: item.no,
                name: item.name,
                addr: item.address,
              };
              var date = new Date();
              date.setDate(date.getDate() + 7);
              cookies.set("store", newCookies, { maxAge: 3600 });
            }}
          >
            <CustomText>{item.name}</CustomText>
          </ELink>
          <SubText>{item.address}</SubText>
        </List.Item>
      )}
    />
  );
};

export default StoresList;
