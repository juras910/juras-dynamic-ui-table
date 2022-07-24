import React from 'react'

import homestyles from '../styles/Home.module.css'

export default class Index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      totalGrid: 9
    }
  }

  render() {
    const countbox1 = (num, row) => {
      num = num + 1

      let first = 1
      let last = 9
      
      first = first + row
      last = last - row

      if(num == first || num == last) {
        return num
      } else {
        return ""
      }
    }

    const countbox2 = (num, row) => {
      let first = 0
      let last = 8
      
      first = first + row
      last = last - row

      if(num == first || num == last) {
        return row + "," + num
      } else {
        return ""
      }
    }

    const useCase1 = (
      <>
        <div className='row'>
          {
            [...Array(this.state.totalGrid)].map((gridH, idxH) => (
              [...Array(this.state.totalGrid)].map((gridW, idxW) => (
                <div className={[homestyles['w-boxes'], 'text-center'].join(' ')}>
                  {
                    countbox1(idxW, idxH)
                  }
                </div>
              ))
            ))
          }
        </div>
      </>
    )

    const useCase2 = (
      <>
        <div className='row'>
          {
            [...Array(this.state.totalGrid)].map((gridH, idxH) => (
              [...Array(this.state.totalGrid)].map((gridW, idxW) => (
                <div className={[homestyles['w2-boxes'], 'text-center'].join(' ')}>
                  {
                    countbox2(idxW, idxH) != ''
                    ?
                    <>
                      <span className={homestyles['flags']}></span>
                      { countbox2(idxW, idxH) }
                    </>
                    :
                    <>
                    </>
                  }
                </div>
              ))
            ))
          }
        </div>
      </>
    )

    return (
      <>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-10 offset-1 col-md-8 offset-md-2 mt-5 mb-5'>
              <h3>Dynamic UI Table 1</h3>
              <br />
              {useCase1}
              <br />
              <hr />
              <br />
              <h3>Dynamic UI Table 2</h3>
              <br />
              {useCase2}
            </div>
          </div>
        </div>
      </>
    )
  }
}