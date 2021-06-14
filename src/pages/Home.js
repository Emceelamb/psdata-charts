export default function Home() {
  return (
    <div className="w-100 mt4">
      <div className="flex justify-center helvetica">
        <h1 className="f2 justify-center mb0">Peace and Security Data hub</h1>
      </div>
      <div className="flex justify-center helvetica">
        <h2 className="f4 justify-center fw2">Data from DPPA-DPO</h2>
      </div>
      <div className="pa4-l">
        <form className="bg-lightest-blue mw7 center pa4 br2-ns">
          <fieldset className="cf bn ma0 pa0">
            <div className="cf">
              <label className="clip" for="Search">
                Search
              </label>
              <input
                className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                placeholder="Search data..."
                type="text"
                name="search"
                defaultValue=""
                id="search"
              />
              <input
                className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                type="submit"
                value="Search"
              />
            </div>
          </fieldset>
        </form>
      </div>
      <section className="mw7 center avenir">
        <h2 className="helvetica fw1 ph3 ph0-l">Available Api's</h2>
        <article className="bt bb b--black-10">
          <a className="db pv4 ph3 ph0-l no-underline black dim" href="/table/fatalities">
            <div className="flex flex-column flex-row-ns">
              <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img
                  src={process.env.PUBLIC_URL + '/img/fatalities.jpg'}
                  className="db"
                  alt=""
                />
              </div>
              <div className="w-100 w-60-ns pl3-ns">
                <h1 className="f3 fw1 helvetica mt0 lh-title">
                  Peacekeeping Fatalities
                </h1>
                <p className="f6 f5-l lh-copy">
                  ​​​​​​​This set includes data on fatalities in UN peacekeeping operations. It includes a unique casualty identifier, the incident date, the mission acronym, the type of casualty, the ISO code associated with the country of origin of the personnel, the relevant M49 DESA code, the type of personnel involved, and the type of incident.
                </p>
                <p className="f6 lh-copy mv0">
                  Dataset name for API: fatalities
                </p>
                <p className="f6 lh-copy mv0">
                  <div className="inline-flex pt4">
                    <a
                      className="f6 link dim ph3 pv2 mb2 dib white bg-navy mr1"
                      href="https://dppa-dpo-api-dev.azure-api.net/public/datahub/fatalities/json"
                    >
                      JSON
                    </a>
                    <a
                      className="f6 link dim ph3 pv2 mb2 dib white bg-navy mr1"
                      href="https://dppa-dpo-api-dev.azure-api.net/public/datahub/fatalities/xml"
                    >
                      XML
                    </a>
                    <a
                      className="f6 link dim ph3 pv2 mb2 dib white bg-navy mr1"
                      href="https://dppa-dpo-api-dev.azure-api.net/public/datahub/download/fatalities/csv"
                    >
                      CSV
                    </a>
                    <a
                      className="f6 link dim ba ph3 pv2 mb2 dib navy"
                      href="/table/fatalities"
                    >
                      Data Table
                    </a>
                  </div>
                </p>
              </div>
            </div>
          </a>
        </article>
        <article className="bb b--black-10">
          <a className="db pv4 ph3 ph0-l no-underline black dim" href="/table/contributionsbygender">
            <div className="flex flex-column flex-row-ns">
              <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img
                  src={process.env.PUBLIC_URL + '/img/gender.jpg'}
                  className="db"
                  alt=""
                />
              </div>
              <div className="w-100 w-60-ns pl3-ns">
                <h1 className="f3 fw1 helvetica mt0 lh-title">
                  Peacekeeping Uniformed Contributions by Gender
                </h1>
                <p className="f6 f5-l lh-copy">
                  Peacekeeping Uniformed Contributions by Gender, as of the end of last calendar month, associated with unique OD, Country ISO Code, M49 DESA code, Country Name of Troop or Police Contributing country, Mission, Description of uniformed category, Gender, and Monthly report Date. This data set will be updated monthly.
                </p>
                <p className="f6 lh-copy mv0">
                  Dataset name for API: contributionsbygender
                </p>
                <p className="f6 lh-copy mv0">
                  <div className="inline-flex pt4">
                    <a
                      className="f6 link dim ph3 pv2 mb2 dib white bg-navy mr1"
                      href="https://dppa-dpo-api-dev.azure-api.net/public/datahub/contributionsbygender/json"
                    >
                      JSON
                    </a>
                    <a
                      className="f6 link dim ph3 pv2 mb2 dib white bg-navy mr1"
                      href="https://dppa-dpo-api-dev.azure-api.net/public/datahub/contributionsbygender/xml"
                    >
                      XML
                    </a>
                    <a
                      className="f6 link dim ph3 pv2 mb2 dib white bg-navy mr1"
                      href="https://dppa-dpo-api-dev.azure-api.net/public/datahub/download/contributionsbygender/csv"
                    >
                      CSV
                    </a>
                    <a
                      className="f6 link dim ba ph3 pv2 mb2 dib navy"
                      href="/table/contributionsbygender"
                    >
                      Data Table
                    </a>
                  </div>
                </p>
              </div>
            </div>
          </a>
        </article>
        <article className="bb b--black-10">
          <a className="db pv4 ph3 ph0-l no-underline black dim" href="/table/contributionsbyrank">
            <div className="flex flex-column flex-row-ns">
              <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img
                  src={process.env.PUBLIC_URL + '/img/rank.jpg'}
                  className="db"
                  alt=""
                />
              </div>
              <div className="w-100 w-60-ns pl3-ns">
                <h1 className="f3 fw1 helvetica mt0 lh-title">
                  Peacekeeping Uniformed Contributions by Rank of TCC/PCCn
                </h1>
                <p className="f6 f5-l lh-copy">
                  Peacekeeping Uniformed Contributions by Rank of Troop- or Police-Contributing Country, as of the end of last calendar month, associated with a unique ID, Country ISO Code, M49 DESA code, Country Name of Troop or Police Contributing country, Rank for the Month, Number of male uniformed personnel, Number of female uniformed personnel, and Monthly report Date. This data set will be updated monthly..
                </p>
                <p className="f6 lh-copy mv0">
                  Dataset name for API: contributionsbyrank
                </p>
                <p className="f6 lh-copy mv0">
                  <div className="inline-flex pt4">
                    <a
                      className="f6 link dim ph3 pv2 mb2 dib white bg-navy mr1"
                      href="https://dppa-dpo-api-dev.azure-api.net/public/datahub/contributionsbyrank/json"
                    >
                      JSON
                    </a>
                    <a
                      className="f6 link dim ph3 pv2 mb2 dib white bg-navy mr1"
                      href="https://dppa-dpo-api-dev.azure-api.net/public/datahub/contributionsbyrank/xml"
                    >
                      XML
                    </a>
                    <a
                      className="f6 link dim ph3 pv2 mb2 dib white bg-navy mr1"
                      href="https://dppa-dpo-api-dev.azure-api.net/public/datahub/download/contributionsbyrank/csv"
                    >
                      CSV
                    </a>
                    <a
                      className="f6 link dim ba ph3 pv2 mb2 dib navy"
                      href="/table/contributionsbyrank"
                    >
                      Data Table
                    </a>
                  </div>
                </p>
              </div>
            </div>
          </a>
        </article>
        <article className="bb b--black-10">
          <a className="db pv4 ph3 ph0-l no-underline black dim" href="/table/pkomission">
            <div className="flex flex-column flex-row-ns">
              <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img
                  src={process.env.PUBLIC_URL + '/img/mission.jpg'}
                  className="db"
                  alt=""
                />
              </div>
              <div className="w-100 w-60-ns pl3-ns">
                <h1 className="f3 fw1 helvetica mt0 lh-title">
                  Peacekeeping Master Dataset - Missions
                </h1>
                <p className="f6 f5-l lh-copy">
                  Peacekeeping Uniformed Contributions by Rank of Troop- or Police-Contributing Country, as of the end of last calendar month, associated with a unique ID, Country ISO Code, M49 DESA code, Country Name of Troop or Police Contributing country, kRank for the Month, Number of male uniformed personnel, Number of female uniformed personnel, and Monthly report Date. This data set will be updated monthly..
                </p>
                <p className="f6 lh-copy mv0">
                  Dataset name for API: pkomissions
                </p>
                <p className="f6 lh-copy mv0">
                  <div className="inline-flex pt4">
                    <a
                      className="f6 link dim ph3 pv2 mb2 dib white bg-navy mr1"
                      href="https://dppa-dpo-api-dev.azure-api.net/public/datahub/pkomissions/json"
                    >
                      JSON
                    </a>
                    <a
                      className="f6 link dim ph3 pv2 mb2 dib white bg-navy mr1"
                      href="https://dppa-dpo-api-dev.azure-api.net/public/datahub/pkomissions/xml"
                    >
                      XML
                    </a>
                    <a
                      className="f6 link dim ph3 pv2 mb2 dib white bg-navy mr1"
                      href="https://dppa-dpo-api-dev.azure-api.net/public/datahub/download/pkomissions/csv"
                    >
                      CSV
                    </a>
                    <a
                      className="f6 link dim ba ph3 pv2 mb2 dib navy"
                      href="/table/pkomissions"
                    >
                      Data Table
                    </a>
                  </div>
                </p>
              </div>
            </div>
          </a>
        </article>
        <article className="bt bb b--black-10">
          <a className="db pv4 ph3 ph0-l no-underline black dim" href="/powerbi">
            <div className="flex flex-column flex-row-ns">
              <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img
                  src={process.env.PUBLIC_URL + '/img/powerbi.png'}
                  className="db"
                  alt=""
                />
              </div>
              <div className="w-100 w-60-ns pl3-ns">
                <h1 className="f3 fw1 helvetica mt0 lh-title">
                  PowerBI Embed
                </h1>
                <p className="f6 f5-l lh-copy">
                  This is a PowerBI example embed page where a single PowerBI dashboard is embedded via iframe and PowerBI public export.
                </p>
              </div>
            </div>
          </a>
        </article>
      </section>
    </div>
  );
}
