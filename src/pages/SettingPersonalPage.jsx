import styled from "styled-components";

import { COLOR, LOCAL_STORAGE_KEYS } from "../constants";
import { useLocalStorage } from "../hooks";
import { BasicButton } from "../mds/button";
import { BasicHeader } from "../mds/layout/mobile/headers";
import { BodyXL } from "../mds/text";

const SettingPersonalPage = () => {
    const [isPersonalAgree, setIsPersonalAgree] = useLocalStorage(
        LOCAL_STORAGE_KEYS.IS_PERSONAL_AGREE,
        false
    );

    const handleAgreeStatus = () => setIsPersonalAgree(true);

    return (
        <Container>
            <BasicHeader pageDescription={"개인정보 처리방침"} />
            <PageContainer>
                <Text margin={"0 0 1.125rem 0"}>
                    {"<마이플랜잇> 개인정보 처리방침"}
                </Text>
                <Text>
                    마이플랜잇은 정보주체의 자유와 권리 보호를 위해 「개인정보
                    보호법」 및 관계 법령이 정한 바를 준수하여, 적법하게
                    개인정보를 처리하고 안전하게 관리하고 있습니다. 이에
                    「개인정보 보호법」 제30조에 따라 정보주체에게 개인정보
                    처리에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을
                    신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이
                    개인정보 처리방침을 수립 공개합니다.
                </Text>
                <BoldText margin={"1.125rem 0 0 0"}>
                    제 1조. 개인정보의 처리목적, 수집항목, 보유 및 이용기간
                </BoldText>
                <Text>
                    (1) 마이플랜잇은 다음과 같이 정보주체의 개인정보를
                    처리합니다. 회원 가입 및 관리 • 수집 목적 : 회원 가입의사
                    확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격
                    유지·관리, 서비스 부정이용 방지, 각종 고지·통지, 고충처리
                    목적 • 필수 수집 항목 : 닉네임, 프로필 사진, 이메일 주소,
                    전화번호, 비밀번호, DI(중복가입 확인정보), CI(암호화된
                    동일인 식별정보) • 보유 및 이용 기간 : 회원 탈퇴시까지 ※ 단,
                    관계법령 위반에 따른 수사, 조사 등이 진행 중인 경우에는 해당
                    수사, 조사 종료시까지 콘텐츠 주문 관련 처리 • 수집 목적 :
                    주문정보 확인, 콘텐츠 제공 및 계약이행, 환불 및 상담 회신,
                    요금결제 • 필수 수집 항목 : 구매자정보(이름, 이메일,
                    전화번호, 신용카드번호, 은행계좌정보) • 보유 및 이용 기간 :
                    회원 탈퇴시까지 ※단, 관계법령에 따라 파기하지 않고
                    보존하여야 하는 경우에는 해당 기간까지 맞춤형 서비스 • 수집
                    목적 : 고객 맞춤형 서비스 제공 • 필수 수집 항목 : 닉네임,
                    아이디, 전화번호, 이메일, 서비스 이용내역(앱 사용 이력, 검색
                    이력, 불량이용기록, 접속로그), IP주소, 광고 식별자 • 보유 및
                    이용 기간 : 회원 탈퇴 시까지 ※단, 법정 의무 보유기간에 따라
                    보관 실적 정보 통계 • 수집 목적 : 상품/서비스 이용 실적 정보
                    통계, 신규서비스개발 • 필수 수집 항목 : 서비스 이용 중
                    생성된 다양한 자동생성정보 및 서비스 이용기록, 쿠키,
                    정보주체가 작성하는 게시물/기타 콘텐츠 등 정보, 단말기
                    정보(OS/화면크기, 디바이스ID), IP주소,
                    개인정보자동수집장치를 통해 수집된 정보 • 보유 및 이용 기간
                    : 회원 탈퇴 시까지 ※단, 법정 의무 보유기간에 따라 보관 고객
                    문의 및 불편사항 접수 • 수집 목적 : 문의자 확인, 문의에 대한
                    회신 등의 처리, 접수자 확인, 접수 내용에 따른 원인 파악 및
                    해결, 접수에 대한 회신 처리 • 필수 수집 항목 : 닉네임,
                    아이디, 전화번호, 이메일, 전달 내용 • 보유 및 이용 기간 :
                    회원 탈퇴 시까지 ※단, 법정 의무 보유기간에 따라 보관 홍보 및
                    마케팅 • 수집 목적 : 통계학적 특성에 따른 서비스 제공 및
                    광고 게재, 광고성(맞춤형) 정보 제공 • 필수 수집 항목 :
                    닉네임, 이메일 주소, 휴대폰번호, 서비스 이용내역(앱 사용
                    이력, 검색 이력, 불량이용기록, 접속로그),
                    개인정보자동수집장치를 통해 수집된 정보, IP주소, 광고 식별자
                    • 보유 및 이용 기간 : 동의 철회 혹은 회원 탈퇴시까지 (2)
                    법정 의무 보유기간에 따라 일정 기간 보관 후 파기하는 정보는
                    아래와 같습니다. 계약 또는 청약철회, 대금결제, 재화 등의
                    공급기록 • 보유 기간 : 5년 • 근거 법령 : 전자상거래 등에서의
                    소비자 보호에 관한 법률 제6조 및 시행령 제6조제1항
                    표시/광고에 관한 기록 • 보유 기간 : 6개월 • 근거 법령 :
                    전자상거래 등에서의 소비자 보호에 관한 법률 제6조 및 시행령
                    제6조제1항 세법이 규정하는 모든 거래에 관한 장부 및 증빙서류
                    • 보유 기간 : 5년 • 근거 법령 : 국세기본법 전자금융 거래에
                    관한 기록 • 보유 기간 : 5년 • 근거 법령 : 전자금융거래법
                    제22조제1항 및 시행령 제12조제1항 서비스 방문기록 • 보유
                    기간 : 3개월 • 근거 법령 : 통신비밀보호법 제15조의2 및
                    시행령 제41조제2항제2호 신용정보의 수집∙처리 및 이용 등에
                    관한 기록 • 보유 기간 : 3년 • 근거 법령 : 신용정보의 이용 및
                    보호에 관한 법률 제20조제2항
                </Text>
                <BoldText margin={"1.125rem 0 0 0"}>
                    제 2조. 개인정보처리의 위탁
                </BoldText>
                <Text>
                    (1) 마이플랜잇은 원활한 개인정보 업무처리를 위하여 다음과
                    같은 수탁자에게 개인정보 처리업무를 위탁하고 있습니다
                    (주)아임포트 • 위탁 업무 : 결제서비스 제공 • 보유 및 이용
                    기간 : 회원탈퇴 시 혹은 위탁계약 종료 및 서비스 종료 시까지
                    (이용자가 해당 서비스를 이용하는 경우에만 처리 위탁됨)
                    (주)알리는사람들 • 위탁 업무 : 문자 메시지 발송 대행 • 보유
                    및 이용 기간 : 회원탈퇴 시 혹은 위탁계약 종료 및 서비스 종료
                    시까지 (이용자가 해당 서비스를 이용하는 경우에만 처리
                    위탁됨) 카카오 • 위탁 업무 : 카카오 메시지 발송 대행 • 보유
                    및 이용 기간 : 회원탈퇴 시 혹은 위탁계약 종료 및 서비스 종료
                    시까지 (이용자가 해당 서비스를 이용하는 경우에만 처리
                    위탁됨) (2) 마이플랜잇은 위탁계약 체결 시 「개인정보
                    보호법」 제26조에 따라 위탁업무 수행목적 외 개인정보
                    처리금지, 기술적∙관리적 보호조치, 재위탁 제한, 수탁자에 대한
                    관리∙감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에
                    명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고
                    있습니다. (3) 위탁업무의 내용이나 수탁자가 변경될 경우에는
                    지체없이 본 개인정보 처리방침을 통하여 공개하도록
                    하겠습니다.
                </Text>
                <BoldText margin={"1.125rem 0 0 0"}>
                    제 3조. 개인정보의 파기
                </BoldText>
                <Text>
                    (1) 마이플랜잇은 개인정보 보유기간의 경과, 처리목적 달성 등
                    개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를
                    파기합니다. (2) 정보주체로부터 동의받은 개인정보 보유기간이
                    경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에
                    따라 개인정보를 계속 보존하여야 하는 경우에는, 해당
                    개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를
                    달리하여 보존합니다. (3) 개인정보 파기의 절차 및 방법은
                    다음과 같습니다. 파기절차 마이플랜잇은 파기 사유가 발생한
                    개인정보를 선정하고, 마이플랜잇의 개인정보 보호책임자의
                    승인을 받아 개인정보를 파기합니다. 파기방법 마이플랜잇은
                    전자적 파일 형태로 기록∙저장된 개인정보는 기록을 재생할 수
                    없도록 파기하며, 종이문서에 기록∙저장된 개인정보는 분쇄기로
                    분쇄하거나 소각하여 파기합니다.
                </Text>
                <BoldText margin={"1.125rem 0 0 0"}>
                    제 4조. 미이용자의 개인정보 파기 등에 관한 조치
                </BoldText>
                <Text>
                    (1) 마이플랜잇은 1년간 서비스를 이용하지 않은 이용자는
                    휴면계정으로 전환하고, 개인정보를 별도로 분리하여
                    보관합니다. 분리 보관된 개인정보는 1년간 보관 후 지체없이
                    파기합니다. (2) 마이플랜잇은 휴면전환 30일 전까지 휴면예정
                    회원에게 별도 분리 보관되는 사실 및 휴면 예정일, 별도 분리
                    보관하는 개인정보 항목을 이메일, 문자 등 이용자에게
                    통지가능한 방법으로 알리고 있습니다. (3) 휴면계정으로 전환을
                    원하지 않으시는 경우, 휴면계정 전환 전 서비스 로그인을
                    하시면 됩니다. 또한, 휴면계정으로 전환되었더라도 로그인을
                    하는 경우 이용자의 동의에 따라 휴면계정을 복원하여 정상적인
                    서비스를 이용할 수 있습니다.
                </Text>
                <BoldText margin={"1.125rem 0 0 0"}>
                    제 5조. 정보주체와 법정대리인의 권리의무 및 행사방법
                </BoldText>
                <Text>
                    (1) 정보주체는 마이플랜잇에 대해 언제든지 개인정보
                    열람∙정정∙삭제∙처리정지 요구 등의 권리를 행사할 수 있습니다.
                    ※ 만 14세 미만 아동에 관한 개인정보의 열람등 요구는
                    법정대리인이 직접 해야 하며, 만 14세 이상의 미성년자인
                    정보주체는 정보주체의 개인정보에 관하여 미성년자 본인이
                    권리를 행사하거나 법정대리인을 통하여 권리를 행사할 수도
                    있습니다. (2) 권리행사는 마이플랜잇에 대해 「개인정보
                    보호법」 시행령 제41조 제1항에 따라 서면, 이메일,
                    모사전송(FAX) 등을 통하여 하실 수 있으며, 마이플랜잇은 이에
                    대해 지체없이 조치하겠습니다. (3) 권리행사는 정보주체의
                    법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수도
                    있습니다. 이 경우 “개인정보 처리방법에 관한
                    고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을
                    제출하셔야 합니다. (4) 개인정보 열람 및 처리정지 요구는
                    「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여
                    정보주체의 권리가 제한될 수 있습니다. (5) 개인정보의 정정 및
                    삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로
                    명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다. (6)
                    마이플랜잇은 정보주체 권리에 따른 열람의 요구, 정정∙삭제의
                    요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나
                    정당한 대리인인지를 확인합니다.
                </Text>
                <BoldText margin={"1.125rem 0 0 0"}>
                    제 6조. 개인정보의 안전성 확보 조치
                </BoldText>
                <Text>
                    마이플랜잇은 개인정보의 안전성 확보를 위해 다음과 같은
                    조치를 취하고 있습니다. 관리적 조치 : 내부관리계획 수립시행,
                    전담조직 운영, 정기적 직원 교육 기술적 조치 :
                    개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치,
                    개인정보의 암호화, 보안프로그램 설치 및 갱신 물리적 조치 :
                    전산실, 자료보관실 등의 접근통제
                </Text>
                <BoldText margin={"1.125rem 0 0 0"}>
                    제 7조. 개인정보 자동 수집 장치의 설치운영 및 거부에 관한
                    사항
                </BoldText>
                <Text>
                    (1) 마이플랜잇은 정보주체에게 개별적인 맞춤서비스를 제공하기
                    위해 이용정보를 저장하고 수시로 불러오는 {"쿠키(cookie)"}를
                    사용합니다. (2) 쿠키는 웹사이트를 운영하는데 이용되는
                    서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의
                    정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도
                    합니다. 쿠키의 사용목적: 이용자가 방문한 각 서비스와 웹
                    사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속
                    여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해
                    사용됩니다. 쿠키의 설치운영 및 거부 : 웹브라우저 상단의 도구
                    {">"}인터넷 옵션{">"}개인정보 메뉴의 옵션 설정을 통해 쿠키
                    저장을 거부 할 수 있습니다. 쿠키 저장을 거부할 경우 맞춤형
                    서비스 이용에 어려움이 발생할 수 있습니다.
                </Text>
                <BoldText margin={"1.125rem 0 0 0"}>
                    제 8조. 행태정보의 수집∙이용 및 거부에 관한 사항
                </BoldText>
                <Text>
                    (1) 마이플랜잇은 서비스 이용과정에서 정보주체에게 최적화된
                    맞춤형 서비스 및 혜택, 온라인 맞춤형 광고 등을 제공하기
                    위하여 행태정보를 수집이용하고 있습니다. (2) 마이플랜잇은
                    다음과 같이 행태정보를 수집합니다. 수집하는 행태정보의 항목
                    : 서비스 이용내역(앱 사용 이력, 검색 이력, 불량이용기록,
                    접속로그), 개인정보자동수집장치를 통해 수집된 정보, IP주소,
                    광고식별자 행태정보 수집방법 : 이용자의 웹사이트 및 앱
                    방문/실행 시 자동 수집 행태정보 수집목적 : 이용자의 관심,
                    성향에 기반한 개인 맞춤형 상품 추천 서비스(광고포함)를 제공
                    보유∙이용기간 및 이후 정보처리 방법 : 수집일로부터 2년 후
                    파기 (3) 마이플랜잇은 다음과 같이 행태정보를 수집·처리하고
                    있습니다. 행태정보를 수집 및 처리하려는 광고 사업자 : Google
                    Anlaytics 행태정보 수집 방법 : 이용자가 당사 웹사이트를
                    방문하거나 앱을 실행할 때 자동 수집 및 전송 수집·처리되는
                    행태정보 항목 : 이용자의 웹/앱 방문이력, 검색이력, 구매이력
                    등 보유·이용기간 : 2년 (4) 마이플랜잇은 온라인 맞춤형 광고
                    등에 필요한 최소한의 행태정보만을 수집하며, 사상, 신념, 가족
                    및 친인척관계, 학력병력, 기타 사회활동 경력 등 개인의
                    권리·이익이나 사생활을 뚜렷하게 침해할 우려가 있는 민감한
                    행태정보를 수집하지 않습니다. (5) 마이플랜잇은 만 14세
                    미만임을 알고 있는 아동이나 만14세 미만의 아동을 주 이용자로
                    하는 온라인 서비스로부터 맞춤형 광고 목적의 행태정보를
                    수집하지 않고, 만 14세 미만임을 알고 있는 아동에게는 맞춤형
                    광고를 제공하지 않습니다. (6) 마이플랜잇은 모바일 앱에서
                    온라인 맞춤형 광고를 위하여 광고식별자를 수집이용합니다.
                    정보주체는 모바일 단말기의 설정 변경을 통해 앱의 맞춤형
                    광고를 차단·허용할 수 있습니다. 스마트폰의 광고식별자
                    차단/허용 • (안드로이드) ① 설정 → ② 개인정보보호 → ③ 광고 →
                    ③ 광고 ID 재설정 또는 광고ID 삭제 • (아이폰) ① 설정 → ②
                    개인정보보호 → ③ 추적 → ④ 앱이 추적을 요청하도록 허용 끔 ※
                    모바일 OS 버전에 따라 메뉴 및 방법이 다소 상이할 수
                    있습니다. (7) 정보주체는 웹브라우저의 쿠키 설정 변경 등을
                    통해 온라인 맞춤형 광고를 일괄적으로 차단·허용할 수
                    있습니다. 다만, 쿠키 설정 변경은 웹사이트 자동로그인 등 일부
                    서비스의 이용에 영향을 미칠 수 있습니다. 웹브라우저를 통한
                    맞춤형 광고 차단/허용 • 인터넷 익스플로러(Windows 10용
                    Internet Explorer 11) Internet Explorer에서 도구 버튼을
                    선택한 다음 인터넷 옵션을 선택 개인 정보 탭을 선택하고
                    설정에서 고급을 선택한 다음 쿠키의 차단 또는 허용을 선택
                    Microsoft Edge • Edge에서 오른쪽 상단 ‘…’ 표시를 클릭한 후,
                    설정을 클릭합니다. • 설정 페이지 좌측의 ‘개인정보, 검색 및
                    서비스’를 클릭 후 「추적방지」 섹션에서 ‘추적방지’ 여부 및
                    수준을 선택합니다. • ‘InPrivate를 검색할 때 항상 “엄격” 추적
                    방지 사용’ 여부를 선택합니다. • 아래 「개인정보」 섹션에서
                    ‘추적 안함 요청보내기’ 여부를 선택합니다. 크롬 브라우저 •
                    Chrome에서 오른쪽 상단 ‘⋮’ 표시(chrome 맞춤설정 및 제어)를
                    클릭한 후, 설정 표시를 클릭합니다. • 설정 페이지 하단에
                    ‘고급 설정 표시’를 클릭하고 「개인정보」 섹션에서 콘텐츠
                    설정을 클릭합니다. • 쿠키 섹션에서 ‘타사 쿠키 및 사이트
                    데이터 차단’의 체크박스를 선택합니다. (8) 정보주체는 아래의
                    연락처로 행태정보와 관련하여 궁금한 사항과 거부권 행사, 피해
                    신고 접수 등을 문의할 수 있습니다. ‣ 개인정보 보호 담당부서
                    부서명 : 프로덕트팀 담당자 : 이명성 연락처 : 010-3314-3760
                    이메일 : mypalnit.unicorn@gmail.com
                </Text>
                <BoldText margin={"1.125rem 0 0 0"}>
                    제 9조. 개인정보보호책임자 및 개인정보 열람청구
                </BoldText>
                <Text>
                    (1) 마이플랜잇은 개인정보 처리에 관한 업무를 총괄해서
                    책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및
                    피해구제 등을 위하여 아래와 같이 개인정보보호책임자를
                    지정하고 있습니다. (2) 정보주체는 「개인정보 보호법」
                    제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수
                    있습니다. 마이플랜잇은 정보주체의 개인정보 열람청구가
                    신속하게 처리되도록 노력하겠습니다. ‣ 개인정보보호책임자
                    직책 : CPO 성명 : 이명성 연락처 : 010-3314-3760 이메일 :
                    myplanit.unicorn@gmail.com (3) 정보주체는 마이플랜잇의
                    서비스(또는 사업)를 이용하시면서 발생한 모든 개인정보보호
                    관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보
                    보호책임자 및 담당부서로 문의할 수 있습니다. 마이플랜잇은
                    정보주체의 문의에 대해 지체없이 답변 및 처리해드릴 것입니다.
                </Text>
                <BoldText margin={"1.125rem 0 0 0"}>
                    제 10조. 권리침해 구제 방법
                </BoldText>
                <Text>
                    (1) 마이플랜잇은 정보주체의 개인정보자기결정권을 보장하고,
                    개인정보침해로 인한 상담 및 피해 구제를 위해 노력하고
                    있으며, 신고나 상담이 필요한 경우 아래의 담당부서로 연락해
                    주시기 바랍니다. ‣ 고충처리 부서 부서명 : 프로덕트팀 담당자
                    : 이명성 연락처 : 010-3314-3760, myplanit.unicorn@gmail.com
                    (2) 정보주체는 개인정보침해로 인한 구제를 받기 위하여
                    개인정보분쟁조정위원회, 한국인터넷진흥원
                    개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수
                    있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는
                    아래의 기관에 문의하시기 바랍니다. 개인정보분쟁조정위원회 :
                    (국번없이) 1833-6972 (www.kopico.go.kr) 개인정보침해신고센터
                    : (국번없이) 118 (privacy.kisa.or.kr) 대검찰청 : (국번없이)
                    1301 (www.spo.go.kr) 경찰청 : (국번없이) 182
                    (ecrm.cyber.go.kr) (3) 「개인정보 보호법」 제35조(개인정보의
                    열람), 제36조(개인정보의 정정삭제), 제37조(개인정보의
                    처리정지 등)의 규정에 의한 요구에 대 하여 공공기관의 장이
                    행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은
                    자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수
                    있습니다. ‣ 중앙행정심판위원회 : (국번없이) 110
                    (www.simpan.go.kr)
                </Text>
                <BoldText margin={"1.125rem 0 0 0"}>
                    제 11조. 개인정보 처리방침의 변경
                </BoldText>
                <Text>
                    (1) 이 개인정보처리방침은 2023년 3월 1일부터 적용됩니다.
                </Text>
                {!isPersonalAgree && (
                    <BasicButton onClick={handleAgreeStatus}>
                        <BodyXL fontColor={COLOR.WHITE}>동의합니다</BodyXL>
                    </BasicButton>
                )}
            </PageContainer>
        </Container>
    );
};

export default SettingPersonalPage;

const Container = styled.div``;

const PageContainer = styled.div`
    padding: 0 1rem;
`;

const Text = styled.p`
    margin: ${props => props.margin};
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.125rem;
    letter-spacing: -0.01rem;
`;

const BoldText = styled.p`
    margin: ${props => props.margin};
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1.125rem;
    letter-spacing: -0.01rem;
`;
