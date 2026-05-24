import { useRef, useContext, useEffect } from 'react';
import useIsMobile from '../../hooks/useIsMobile';
import CONFIG from '../../config/config';
import InteractionContext from '../../context/InteractionContext';

const Projects = () => {
  const isMobile = useIsMobile();
  const projects = CONFIG.projects || [];
  const { setProjectCellRect, activeMagneticId } = useContext(InteractionContext);
  const cellRefs = useRef({});

  const activeIndex = activeMagneticId?.startsWith('project-') ? Number.parseInt(activeMagneticId.split('-')[1]) : null;

  const getGridCols = () => {
    if (isMobile) return 1;
    if (window.innerWidth < 1280) return 2; //1024
    return 3;
  };

  useEffect(() => {
    projects.forEach((_, index) => {
      const cellId = `project-${index}`;
      if (cellRefs.current[cellId]) {
        const rect = cellRefs.current[cellId].getBoundingClientRect();
        setProjectCellRect(cellId, rect);
      }
    });

    const handleResize = () => {
      projects.forEach((_, index) => {
        const cellId = `project-${index}`;
        if (cellRefs.current[cellId]) {
          const rect = cellRefs.current[cellId].getBoundingClientRect();
          setProjectCellRect(cellId, rect);
        }
      });
    };

    const handleScroll = () => {
      projects.forEach((_, index) => {
        const cellId = `project-${index}`;
        if (cellRefs.current[cellId]) {
          const rect = cellRefs.current[cellId].getBoundingClientRect();
          setProjectCellRect(cellId, rect);
        }
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [projects, setProjectCellRect]);

  return (
    <div style={{ padding: isMobile ? '5rem 1.5rem' : '10rem 2rem', maxWidth: isMobile ? '75%' : '55vw', margin: '0 auto' }}>
      {/* <h2 
        style={{
          color: CONFIG.colors.text,
          fontSize: isMobile ? 'clamp(1.5rem, 5vmin, 2.5rem)' : 'clamp(2rem, 4vmin, 3rem)',
          marginBottom: isMobile ? '2rem' : '3rem',
          textShadow: '0 0 15px rgba(255, 255, 255, 0.3)',
          textAlign: 'center'
        }}
      >
        Projects
      </h2> */}
      
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${getGridCols()}, 1fr)`,
          gap: isMobile ? '1.5rem' : '2rem',
          width: '100%'
        }}
      >
        {projects.map((project, index) => {
          const isActive = activeIndex === index;

          return (
          <div
            key={index}
            ref={(el) => { cellRefs.current[`project-${index}`] = el; }}
            style={{
              border: `1px solid ${isActive ? CONFIG.colors.primary : `${CONFIG.colors.white}25`}`,
              borderRadius: '8px',
              padding: isMobile ? '1rem' : '1.5rem',
              backgroundColor: isActive ? CONFIG.colors.differenceSalmonPink : CONFIG.colors.projectBackground,
              backdropFilter: 'none',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, opacity 0.3s ease, background-color 0.3s ease',
              opacity: activeIndex !== null && activeIndex !== index ? 0.4 : 1,
              maxWidth: getGridCols() === 1 ? '600px' : 'none',
              margin: getGridCols() === 1 ? '0 auto' : '0',
              boxShadow: isActive ? `0 8px 25px ${CONFIG.colors.primary}40` : 'none'
            }}
          >
            <div style={{ marginBottom: isMobile ? '1rem' : '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h3
                  style={{
                    color: isActive ? CONFIG.colors.primary : CONFIG.colors.text,
                    fontSize: isMobile ? 'clamp(1rem, 3vmin, 1.25rem)' : 'clamp(1.25rem, 2.5vmin, 1.5rem)',
                    fontWeight: 600,
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.2)'
                  }}
                >
                  {project.title}
                </h3>
                <span
                  style={{
                    fontSize: isMobile ? '0.75rem' : '0.875rem',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    backgroundColor: project.isOpenSource ? `${isActive ? CONFIG.colors.darkText : CONFIG.colors.openSource}15` : `${isActive ? CONFIG.colors.darkText : CONFIG.colors.closedSource}15`,
                    color: project.isOpenSource ? (isActive ? CONFIG.colors.darkText : CONFIG.colors.openSource) : (isActive ? CONFIG.colors.darkText : CONFIG.colors.closedSource),
                    fontWeight: 425
                  }}
                >
                  {project.isOpenSource ? 'Open Source' : 'Closed Source'}
                </span>
              </div>
            </div>

            <div style={{ marginBottom: isMobile ? '1rem' : '1.5rem' }}>
              {project.image && (
                <div
                  style={{
                    width: '100%',
                    height: isMobile ? '150px' : '200px',
                    marginBottom: '1rem',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    backgroundColor: isActive ? `${CONFIG.colors.differencePurple}20` : `${CONFIG.colors.white}10`
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              )}

              {project.subtitle && (
                <h4
                  style={{
                    color: isActive ? CONFIG.colors.differenceHotPink : CONFIG.colors.primary,
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    fontWeight: 500,
                    marginBottom: '0.5rem'
                  }}
                >
                  {project.subtitle}
                </h4>
              )}

              <p
                style={{
                  color: isActive ? CONFIG.colors.differenceBlack : CONFIG.colors.text,
                  fontSize: isMobile ? '0.875rem' : '0.95rem',
                  lineHeight: '1.6',
                  opacity: isActive ? 1 : 0.85
                }}
              >
                {project.description}
              </p>
            </div>

            <div>
              <div style={{ marginBottom: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tags?.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    style={{
                      fontSize: isMobile ? '0.75rem' : '0.875rem',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '4px',
                      backgroundColor: isActive ? `${CONFIG.colors.differencePurple}15` : `${CONFIG.colors.white}15`,
                      color: isActive ? CONFIG.colors.differenceBlack : CONFIG.colors.text,
                      border: isActive ? `1px solid ${CONFIG.colors.differenceBlack}` : `1px solid ${CONFIG.colors.white}30`
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: isActive ? CONFIG.colors.differenceHotPink : CONFIG.colors.primary,
                      fontSize: isMobile ? '0.875rem' : '1rem',
                      textDecoration: 'none',
                      fontWeight: 500,
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = CONFIG.colors.differencePurple}
                    onMouseLeave={(e) => e.currentTarget.style.color = CONFIG.colors.differenceHotPink}
                  >
                    GitHub
                  </a>
                )}
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: isActive ? CONFIG.colors.differenceHotPink : CONFIG.colors.primary,
                      fontSize: isMobile ? '0.875rem' : '1rem',
                      textDecoration: 'none',
                      fontWeight: 500,
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = CONFIG.colors.differencePurple}
                    onMouseLeave={(e) => e.currentTarget.style.color = CONFIG.colors.differenceHotPink}
                  >
                    Website
                  </a>
                )}
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
