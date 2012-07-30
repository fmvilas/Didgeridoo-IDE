<?php

/* SensioDistributionBundle::Configurator/steps.html.twig */
class __TwigTemplate_2844ad2d7f607f500bca7e2bdaf7287e extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<div class=\"symfony-block-steps\">
    ";
        // line 2
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable(range(1, $this->getContext($context, "count")));
        foreach ($context['_seq'] as $context["_key"] => $context["i"]) {
            // line 3
            echo "
      ";
            // line 4
            if (($this->getContext($context, "i") == ($this->getContext($context, "index") + 1))) {
                // line 5
                echo "          <span class=\"selected\">Step ";
                echo twig_escape_filter($this->env, $this->getContext($context, "i"), "html", null, true);
                echo "</span>
      ";
            } else {
                // line 7
                echo "          <span>Step ";
                echo twig_escape_filter($this->env, $this->getContext($context, "i"), "html", null, true);
                echo "</span>
      ";
            }
            // line 9
            echo "
      ";
            // line 10
            if (($this->getContext($context, "i") != $this->getContext($context, "count"))) {
                // line 11
                echo "        &gt;
      ";
            }
            // line 13
            echo "    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['i'], $context['_parent'], $context['loop']);
        $context = array_merge($_parent, array_intersect_key($context, $_parent));
        // line 14
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "SensioDistributionBundle::Configurator/steps.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  56 => 14,  50 => 13,  46 => 11,  44 => 10,  35 => 7,  24 => 3,  20 => 2,  17 => 1,  67 => 15,  49 => 16,  47 => 15,  41 => 9,  29 => 5,  25 => 5,  19 => 1,  81 => 24,  75 => 21,  71 => 20,  65 => 17,  61 => 6,  57 => 15,  52 => 17,  48 => 12,  42 => 8,  39 => 7,  36 => 6,  33 => 7,  27 => 4,);
    }
}
