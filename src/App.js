import React, { Component } from "react";
import "./App.css";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

export default class App extends Component {
  state = {};
  handleLoans = () => {
    this.setState({
      loans: true
    });
    console.log("loans");
  };

  handleLoanOfficer = () => {
    this.setState({
      loans: false,
      loanOfficer: true,
      salesManagement: false
    });
    console.log("handleLoanOfficer");
  };

  handleSaleManagement = () => {
    this.setState({
      loans: false,
      loanOfficer: false,
      salesManagement: true
    });
    console.log("handleSaleManagement");
  };
  render() {
    return (
      <div className="App">
        <div className="modi">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHkAnAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EAEwQAAIBAwEEBAkFDAcJAAAAAAECAwAEEQUGEiExE0FRYQcUIjJxkbHB0TVSgaGyFSMzQmJyc3SSwuHiFyQ2dbPS8BY0N0RFVIKTlP/EABoBAQACAwEAAAAAAAAAAAAAAAADBAECBQb/xAA5EQACAQMCBAMHAgQFBQAAAAAAAQIDBBESMQUTIUFRYXEyM4GRobHBIvAUQlJyFSM00eE1Q0Ri8f/aAAwDAQACEQMRAD8A+40AoBQCgFAKAUAoBQCgFAKAUAoBQFTqmuW1k3RIDPcHgIk7e/sqrWuoU3jd+BFOqo9O5pgsb7UvvmrSGOI8RaRHA/8AI9forWNKpV61XheC/IUZS6y+RdRxrFGqIoVVACgcgBVtRSWESmVZAoBQCgFAKAUAoBQCgFAKAUAoBQGqeaOCNpJXVEUcWJ5VrKSissw2kss5TUdeutSnFlpSuqucbw4M3+UVyqt3OtLl0StKq5vTAlaZpq2MvQWxWW+I++zkZWAHqHf/AKNdC1soUY65biMdL0x3Oht4hDGEBZsc2Y5JPbVhvJZisI21gyKAUAoBQCgFAKAUAoBQCgOG17Uby21y6S3upUVSuFD8PNHVXDuq9SFeSjJr/wCFKrOUZvDNUO0uqR85UcfloPditY31Zd8mFXmibDtfcD8NaxN+YxHxqaPEpL2om6uX3RMj2vtSv3y2mU9xBFTriVN7pm6uF3RRX9/ea5eLEqnBOI4VPAen41Qq1alzPCIJTlVeEXlvbDSUSxsd2TUpx5chHBB1n0dgruWdnGlHVIkf6P0R9pl7YWcdnbiOPic5ZjzdjzJqac3N5ZYhBQWCTWpuKAUAoBQCgFAKAUAoCq1LXLbTbpYLlZMsu8GUZHOqta7hSlpkRzqxg8M9h2g0uXldqp7HBX20jeUJfzBVYPuT4rmCYAxTRuD81gasKcXszdNM1XFjaXRJuLaGQ9roCa1lShP2omHCL3RXzbM6ZKDuxNEe1HPvqvKxovtgjdGD7FPq+z1pYWzz+OuoHBVdQSx7OGKqV7KnSjq1EU6MYrOTnVBYhcEk9Q41zNysdXawx7O6b4xOFe+mGFXs7vo669Fw+y0779y08UIZ7lpodi9uj3F15V3P5UhPMdgq9WqKT0x2RvQpuK1S3Za1CTigFAKAUAoBQCgFAKAUByW1thd3F7HLBbSSoI8EoM4OT1Vyr+jOU04rJVrwk5ZRzMkckTYkjdCPnKQa5jjKO6wVmmtzEcDkHB7RWF02MLpsSodRvoB96vJ1A6ukJHqNSxrVY7SZupzXcnQ7TanH5zxyD8uP4YqeN9WW7ybqvNEPVNSuNSmEs5ACjCovIVDXryrPMjSdRzeWXOzWnxwQtq195KIMxb32vhV/h9q29bXoTUYqK1yJGlxyazqbX9yp6CI4iQ8Rnq9XOvQVHyYaFu9zSknWnrex1AqmXhQCgFAKAUAoBQCgIerX402ya5MZkAYDdBxzOKhr1eVDVjJpOWiOSsh2t098dIs0XpXPsqtHiNJ75RGriBOh1zTZsbl3GCepju+2p43VGW0iRVIPZkyOeOVcxSI47VYGplKL2ZumjJkVxh1Vh2EZrLSe4wQ59F06fO/ZwgnrVd0/VUMrWjLeKNHTg90V8+ymnsMxPNEe5s+2q8uH0nt0I3bw7HJahBFa3ksEE3TKhxv7uOPXXJrQjCbjF5wVZpKWEzfomnHU71YyCIV8qRh2dn0/Gt7ahzp47dzNKGuXkXGu3LXl1HpViBuKQpC8i3Z6B/rlXr7enGlDmMXE3UkqUTpbG1Sztkgi81Bz7T1mqk5Ob1MuwgoR0okVqbigFAKAUAoBQCgFAVG1UckuiyrEjO28hwq5PnCql7FyotLy+5FWWYNHBMChw4KnsYYrg4079CgecKwD0EpxUlT2jhWU2thklQapqEP4O9nHcXJH11LG4qx2kzdVJrZk6HafU48b7xyj8tPhip439Zb9TdV5okTbV3MtrJELdEkcYEiufJ78fxqSXEZyi1jqbu4bWxz2CTgZJP11z+pWOwULs9oYHDxybn+d8AK9Lw600pJ+rLM5cin5mOyViTv30q8TlUz9Z93rroXdT+RGlpTz+tnT1TLwoBQCgFAKAUAoBQCgBoDXJDFKpWWNXB5hhmtXFPdGGkyDPoOmTedaIp7UJX2VDK0oy3iaOlB9ivn2Ss3z0M00fdkMKry4dTfsvBG7ePYr5tkblc9BdRP3OpX41Xlw2X8sjR2z7MgzbPapD/y/SDtjcH+NV5WVZdsmjoTRBmtLqH8LbTJj50ZFQypVI7xZG4SW6LXZOw8avvGJBmKDjjtfq+Pqq3Y0dc9b7fcmoQy8s91GZ9Y1gRQnKBujj9HWfaa9bSSo0svcr1W61XCOztoUt4I4oxhUUACuc228s6UUorCNtYNhQCgFAKAUAoBQCgFAKAUAoBQCgFAeEZoDxUVRwAHoFYSwYwRLbSrK1nM0EASQjGQTw9A5CpJVZyWlvoaRowi8pdSbWhIKAUAoBQCgFAKA0SXdvG+5JPEjD8VnANZUW9kaucU8NiO7t5HCRzxOx5Krgk0cWt0FOL6Jhru3WTo2niEmcbpcZ9VMPGcDXHOM9TdmsGxoN9aAkG6gBBwR0grbTLwNOZDxPVvLZlZlniKr5xDjA9NY0vwGuOM5MoriKYEwyJIBzKtnFGmtzKlF7MxS7t5H3I54mf5quCaaWlnAU4t4TPZbqCFgss0aE8gzgUSb2Qc4rdnrzxRpvySIqH8ZmwKYewcopZbNfj9p/wB1B/7BWdMvAxzIeKM47qCUkRTRuQMkKwPCsNNboypxezEV1BM27FPE7c8K4Jo4tboKcZbMzlljiQvI6og5sxwBRJt4RltJZZhBdW9yCbeaOUDmY2DY9VJRcd0YjOMvZeTOSWOJS8jqijmWOBWEs7GXJLc8imjmXeidXXOMqcistNbhSUuqZiLu3MvRCeLpM43N8Zz6KaXjODGuOcZ6ie6t7cA3E8cQPIyMFz66KLlshKcYrMng2RyJIgeNldTyZTkGsPpuZTUllHyjaWNdR21nt3lWKNpUj6RuSAKMn213rZulaakjyt5FVr5xbwtjp9l9l7TTtS8dttTjuyiFd1AOGevgTVG6vJ1YaHHB1LLh9OjU1xnkoDi98JOOf9bx+wP5at+xY/D7lB/r4n8fwfTpDuoW7BmuJg9K3hZPjei6fBreozC4u0tVIMm++OOTy4kdtejrVZW9NaVk8fbUI3NWSlLB2+mbNQWOhatFb3aXYu4iA6gYBAbA4E9ZrlVruVSrBtYwduhYxpUKkYyzqRzeymr/AHM0DWiGw4WMw/ntlfq4Gr93R5temvU5thc8m3q/vctvBnpoWO51OQcXPRRE9g84+z1VW4lVy1TXbqW+DUMKVWXp/ucxtZqP3V125mU70KHoo/zRw+s5NdCzpcqkl47nKv67rV5SWy6Hb3Gmy7SbIaZDFOkR3Y3ZmBOcKRjh31yYVVb3Em14neqUZXlpBJ42Zwc+ivHtANHWZHk6VY+l3eGSAc47s/VXXVynR5uDgStGrjkZ77ndaDs9Js1b6jdTXKSloDjcQjd3QT8K5NxdK5cYpYO7a2Ts4zk5Z6FL4MIlF/fTtgCKALnsycn7NWuKP9MY+ZR4KlrnLwRW3lxf7Y630NufveSYUY4WNB+Me/l9JqaEKdnS1S3K9WdbiFfTHb8GnUNP1HZLU4JElXfI3o5Y+TDrUj3d9bU6tO8g00aVqNawqqSZ1+298t1sdBOowt20TAfRve6udY09N1h9snX4lVU7JSXfBS+DnV/FL9tOlbEVycx9gkHxA+oVb4lQzBVFuijwe60VOVLZ7epr2ZXxvb+WfqE08v0eUB7RS5/RZpeSMWa5nEG/NkTXi+p7YT297cdCnTmFXfiI0HL18D9NS2+KVqpwWemSG6zXvXCbx1wXVrsZfWokjFyWXfyrRSlARgcx21Vd9Tn1wXI8MrQ6avrgo0sl1va67gkmEMck0rGTswTVrmOhbRaWeiKSoq5vJRbwss73ZbQ7fQxOkN4LhpipJwAQB6D31yLm4lXw2sYO/ZWkLZNRlnJx2ybpcbbS3MjKAHmlyTjnkfvV0rvMbRRXkcexalfOT8z6Dq93HHpF7LHIpMcDtwIOPJOK5FKDdSK80egr1EqUnnZM+YbLaBFrfjImuxbrAF3cgHeznvHYPXXdurqVDGI5yeXsbKNznVLGD6XoFhDpulx2MMwnWMnL8OOST764depKrNzfc9Na0Y0aSpxeUj5Hd2skep3FjGCWFw0QXtIYgV6KE1ylN+B5GrTarOmvHH1PpGsyLs1seLeE4lEQhjI5l2HE+01xKMXc3GX6npLhqzs9Md8Y+L/eT5vFPHHpk9sYGLyyo3S54BVzwx3kmu245qqWds9Dzako0XFx3x1Ppfg+m6TZiBDxMTuh/aJ99cS/WK7foel4VLNrFeGfucto/wDXPCI0nzbmVvUCBV6r+iyS8kcyh/mcSb839Dt9r5ei2a1Fu2Ep+1w99cy0Wa8V5navpabab8jl/B9btJoesMnnyZjX0hD/AJqvcRl/mwX73OZwiGaFRr99Cr8HupWmn6pML2VYhNFurI/AAg5wT1Z91T8RpyqU04rJU4TXp0ajU3jKMtv9Yt9UvbeCxcSpApy68QzHHAdvKnD6MqUXOfc24rcwrVIxpvOCbtxG1ls5otg/noBvelUA99Q2L115zRPxNcu2pU3+8Io9X0mTTdP0jU7csFuIUcsPxJPOHrGPUat0a6qznSl2b+RRuLaVGnTqx7pfMtfBrH0ms3dw3EpBz7yw+FQcTlinGPmWeDR1VpTfh9zftrFpeqaeNasLmPplKpImcFwTgZHPI9lR2MqtKpyproScSjQrU+fTfVblxsLqU0+gqs4aQwSGJW690AEZ9eKr31KMazx36lzhtxKVutXXHQrJPB1LI7O2qKSzFj/V+05+dViPFEljT9SpLgkpNvX9P+Sz2a2PbQ72S6N2sxaIxqBFu4JI48+6q9ze8+KjjBbs+Gu3m5uWengVX9G8uBnVEJHbb/zVZ/xRf0fUqf4G/wCv6Fjpexb2Gn6lai9VmvUVBIIsbgBOeGePOoKt9zJxlp28yzR4Y6dKcNXtLGxXf0byH/qif/P/ADVP/in/AKfUrf4G/wCv6HS7KaB/s/azwmcTNLJv7wTd6sY51RubjnyTxjB07G0/hYOOc5IceyYXap9ZeZWi3zIsO5xDY559OTUjvHyOTgiXD1/FOu38DbtVs5PrzwBb0QRQg4Tot7LHr5jsrW1uVb5enOTN9ZSusLVhLyJV9oS3Gzv3Hhk6NRGqK5XOMY44+io6ddxrc1ktW0U7fkJ4Mdl9Dk0KzltmuROHl3wQm7jgBjmeys3Vfnz1YwYsrV20HDOSBoGyT6Tq8moSXgnLK43RHu4LHOc5NS17zm0lTSwQ23D3Qruq5Zznt4lxtFpj6vpUtjHMIekK5crvcAc8sioKFXlVFPGcFu6oOvSdNPGTTsxoh0LT2tTMJi0hcuF3eYA5ZPZWbmvz56sYNLO1/hqejOeuSm1zYSC/unurK48WeQ7zoU3lJ6yOWKs0OISpxUZLOCndcJhVk5QeMmzZ/Yi3025S6u5zczRnKDd3UU9uOs1i4v51VpSwjNpwqFGWuTyyTtXsxJr8tuy3YgWFWGDHvZJxx5jsqO1uv4dPpnJLfWLumv1YwT7/AEaK90L7lyHAESorgeaVAwfqqKFZwq8xE9W2jUocl+BA2X2YOheN79z0/jCqvBN3dxnvPbU11d89p4xggsrD+G1ZlnJST+DnMx8W1ErFngJIssPpBGasx4o8fqj1KM+CJyzGfT0Ov0TS4NG09LO3LFVJJdubE8ya51arKrPVI7NvbxoU1CJY1GTCgFAQLnVrW2vYrORna4kwQkcbPgE4BbA4DPWa3jTlKLktkQzrwhNQe7MNQ1ux06eOG7lZHcZGI2IAzjJIGAMnrranRnUWYoxVuaVKSjN7m6/1G30+NHui4Ej7ihI2cscZwAoJ6q1hCU3hG1WtCksyMbnVLa1sUvJzIsT7oUdE2/luQ3cZz3YpGnKUtK3E60IQ1y2NtlfW99aLdW0m9Ec8cEYxwOQeIrE4ShLTLczTqxqR1RfQ0nV7X7mrqIaRrVlDBliYnB690DP1Vnly16O5q7iHL5vY26ffw6hAJ7bpDGeReNkz3gMBw76xODg9LNqVWNWOqOxleXkNmIjOxUSyLEmFJyzHAHCkYuWxmdSMMau/Qxt76C5jlkhfKROyOSpGCvOkouLwzEKsZptdvwarPV7O9aFbaUu00HToNxhlM4zxHDieR41tOlOGdS26GsK9OpjS91k3wXkM9xPBG2ZICokGDwJGRx6+FauLSTfc3jUjKTiuxFh1uxm1A2McpM4LAeQwUlfOAbGCR14NbOjNR1tdCONzTlU5afU2XWq2lpM0NxLuyLA1wRuk+QvM/wAKxGnKSyl5GZ16cHpk+uM/AlxSLLGsieayhgSMcDWj6PBKnlZRnQyKAUAoBQHhoCi0KWN9X1syMvjHjQQKT5W4qLj6OJqxWWKcMbY/JStpJ1amd84+CRU6ypvNq1glbFkxht5cDiW8qUDPUCVUGp6WIW+rv1f2RWr5ndaX7PRP6ssdoC8us6TbwzxwOvSz77qGAwoUcMj55qGj0pzbWdkT3OXWpxi8bv6YNu0M0aXOkRzyIieM9K7McACNC2fXisUItxm4+GPmbXUkpU030zn5IiWUrWmx19fEbrSi4uVB/LLFfqIreaUriMPDC+RHTk4Wkqnjl/7EjU4zYbFyW8fBlsxAp7yoX2mtKb1XKk/HJvVjy7RxXhj8F5bRLBbxRIMLGgUDuAxUDeW2XILTFIp9oZY11DR0mdUjW4adixwPIRveanop6JteH5Kl01zKae2c/JEG2le02CmumGJZIJZuI/GkLMPtAVJJKdyo9ui+RFCThZOT3ab+eTzZO08X1O/hIIFmi2y57CzP+8KzdT1Qi/HL/Bixp6Kkl/ThfksNBbeGrXYG90t7Ju46wgCD7JqKuvYh5ffqT27yqk/N/Tp+Cm2dKXEugJEwkaC1kup2U5w0nDj3klvVU9x05jfdpL4FW1xJ0kuybfqzRtSGn1e6kjGciKwJHV0gc+1lra2eKaXrL5YIrxaqsmvKPzz/AMHdIoVQqjAAwBXOO0uhlQyKAUAoBQHhoDj4v+I8n6l7xV7/AMJepyI/9Tl6Gy6+U7j+9Lb7ArEfdr+2X3N5+9l/dH7Fdt/8saR6R9oVLZe5n+/Er8V9/S/fdEvwg/h9I/SP+5WtjtP9+JLxT2qfx/Bc7R/2avP0Q9oqtb+/j6lu6/00vQ82n+Rh+mh+2tLb3vwf2M3nufivuXQ5VAWzjPCd8lWn6wPsmuhw/wBt+hx+M+5j6lvtF/Zib8yP7S1Xo+/Rauf9K/RGzR/lfXP1lP8ACSsVfdw9H9za397V9V9hsz8lt+szf4jUuPb+C+yM2nun6v7lN4O/wWp/rbVYv/5fQpcI/wC56md1/vt7/e9t9lKxD2Y/2v8AJmftz/vj9kdcOVUTrntAKAUB/9k="
            className="moimg"
            alt="logo"
          />
          <div className="logout">Log out</div>
        </div>
        <div>
          <div>
            <span>Sales manager</span>
          </div>
          <div>
            <span>Required Rolling avg</span>
            <span>$ 11,351,365.00</span>
            <Progress percent={10} status="success" />
            <span>actual</span>
            <span>12</span>
          </div>
          <div>
            <span>Required Rolling avg Units</span>
            <span>28</span>
            <Progress percent={50} status="success" />
            <span>actual</span>
            <span>31</span>
          </div>
        </div>
        <div className="monthlySummary">
          <span>Monthly Summary</span>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Source</th>
                  <th>Rate</th>
                  <th>Amout</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lo commision self sourced</td>
                  <td>0.490%</td>
                  <td>$ 30,000.00</td>
                </tr>
                <tr>
                  <td>Lo commision ECU sourced</td>
                  <td>0.590%</td>
                  <td>$ 42,473.00</td>
                </tr>
                <tr>
                  <td>Bonus</td>
                  <td></td>
                  <td>$ 4,587.00</td>
                </tr>
                <tr>
                  <td>Loa commision paid</td>
                  <td>0.090%</td>
                  <td>($76,000.00)</td>
                </tr>
                <tr>
                  <td>total lo commission</td>
                  <td></td>
                  <td>$ 30,000.00</td>
                </tr>
                <tr>
                  <td>sales manager commission</td>
                  <td></td>
                  <td>$ 30,000.00</td>
                </tr>
                <tr>
                  <td>
                    <h1>Total commission</h1>
                  </td>
                  <td></td>
                  <td>
                    <h1>$ 100,783.00</h1>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="buttons">
          <span onClick={this.handleLoans}>Loans</span>
          <span onClick={this.handleLoanOfficer}>Loan officer Assistants</span>
          <span onClick={this.handleSaleManagement}>Sales Management</span>
        </div>
        {this.state.loans && (
          <div>
            <span>LOANSSS</span>
            {/* add the table related to laons here */}
          </div>
        )}
        {this.state.loanOfficer && (
          <div>
            <span>LOAN OFFICER</span>
            {/* add the table related to laon officer here */}
          </div>
        )}
        {this.state.salesManagement && (
          <div>
            <span>SALES MANAGEMENT</span>
            {/* add the table related to sales management here */}
          </div>
        )}
      </div>
    );
  }
}
