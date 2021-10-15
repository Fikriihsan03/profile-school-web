import program from "./content";
import FeaturedProgram from "./FeaturedProgram";
const FeaturedProgramList = () => {
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {program.map((_, i) => {
          return (
            <FeaturedProgram
              key={i}
              image={program[i].image}
              title={program[i].title}
              description={program[i].description}
            />
          );
        })}
      </div>
    </div>
  );
};
export default FeaturedProgramList;
