import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const JobFilter = props => {
  const {onCheckEmp, onCheckSalary} = props
  const renderTypeOfEmployment = () => (
    <ul className="ul-items">
      {employmentTypesList.map(eachType => {
        const {label, employmentTypeId} = eachType
        const onEmpTypeCheck = () => {
          onCheckEmp(employmentTypeId)
        }
        return (
          <li key={eachType.employmentTypeId}>
            <input
              type="checkbox"
              id={employmentTypeId}
              className="checkbox"
              onClick={onEmpTypeCheck}
            />
            <label htmlFor={employmentTypeId} className="checkbox-label">
              {label}
            </label>
          </li>
        )
      })}
    </ul>
  )

  const renderSalaryRange = () => (
    <ul className="ul-items">
      {salaryRangesList.map(eachSalary => {
        const {salaryRangeId, label} = eachSalary
        const onCheckSalaryItem = () => {
          onCheckSalary(salaryRangeId)
        }
        return (
          <li key={eachSalary.salaryRangeId}>
            <input
              type="radio"
              id={salaryRangeId}
              onClick={onCheckSalaryItem}
            />
            <label htmlFor={salaryRangeId} className="checkbox-label">
              {label}
            </label>
          </li>
        )
      })}
    </ul>
  )

  return (
    <>
      <div className="employment-container">
        <h1 className="heading">Type of Employment</h1>
        {renderTypeOfEmployment()}
      </div>
      <div className="salary-container">
        <h1 className="heading">Salary Range</h1>
        {renderSalaryRange()}
      </div>
    </>
  )
}

export default JobFilter
