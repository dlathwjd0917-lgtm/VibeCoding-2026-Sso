import benefitCategories from "../data/benefits_data.json";

function getIconPath(index) {
  const directory =
    index <= 10
      ? "/images/복지이미지"
      : "/css/2026년 한미그룹 하반기 공개채용_files";

  return `${directory}/wf_ico${index}.png`;
}

export default function WelfareSection() {
  return (
    <section className="welfare" id="welfare" aria-labelledby="welfare-title">
      <div className="welfare__inner">
        <header className="welfare__head">
          <h2 className="welfare__title" id="welfare-title">
            한미 생활을 더 즐겁게 만드는 방법
          </h2>
          <p className="welfare__lead">
            건강부터 성장, 휴식까지 알차게 준비한 복지를 소개할게요.
          </p>
        </header>

        <img
          className="welfare__character"
          src="./images/복지이미지/con5_char.png"
          alt="거울과 화장품을 든 주황색 한미 캐릭터"
          width={411}
          height={417}
          loading="lazy"
        />

        <div
          className="welfare__scroll"
          role="region"
          aria-label="회사 복지 목록"
          tabIndex={0}
        >
          <ul className="welfare__list">
            {benefitCategories.flatMap((category, categoryIndex) => {
              const benefitOffset = benefitCategories
                .slice(0, categoryIndex)
                .reduce(
                  (total, previousCategory) =>
                    total + previousCategory.benefits.length,
                  0,
                );

              return [
                <li
                  className="welfare__section-intro"
                  key={`intro-${category.category_title}`}
                >
                  <div className="welfare__intro">
                    <h3 className="welfare__intro-title">
                      {categoryIndex === 0 && (
                        <span aria-hidden="true">💗 </span>
                      )}
                      {category.category_title}
                    </h3>
                    <p className="welfare__intro-copy">
                      {category.category_subtitle}
                    </p>
                  </div>
                </li>,
                ...category.benefits.map((benefit, index) => (
                  <li
                    className="welfare__card"
                    key={`benefit-${benefit.title}`}
                  >
                    <div className="welfare__text">
                      <h4 className="welfare__name">{benefit.title}</h4>
                      <p className="welfare__description">
                        {benefit.description}
                      </p>
                    </div>
                    <img
                      className="welfare__icon"
                      src={getIconPath(benefitOffset + index + 1)}
                      alt=""
                      width={70}
                      height={70}
                      loading="lazy"
                    />
                  </li>
                )),
              ];
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
